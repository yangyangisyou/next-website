/* eslint-disable no-undef */
import {
  put, all, call, takeEvery,
} from 'redux-saga/effects';
import Cookies from 'universal-cookie';
// https://developers.google.com/identity/protocols/oauth2
// http://vito-note.blogspot.com/2015/04/google-oauth-20.html

function* storeUserData(profileObj) {
  const {
    name, googleId, avatar, email,
  } = profileObj;
  const payload = {
    googleId,
    name,
    avatar,
    email,
  };
  localStorage.setItem('googleId', googleId);
  localStorage.setItem('userName', name);
  localStorage.setItem('avatar', avatar);
  localStorage.setItem('email', email);
  yield put({ type: 'STORE_OAUTH_DATA', payload });
}

function* storeToken(tokenObj) {
  const cookies = new Cookies();
  const { accessToken, idToken } = tokenObj;
  cookies.set('accessToken', accessToken, { maxAge: 640000 });
  cookies.set('idToken', idToken, { maxAge: 640000 });
  yield put({ type: 'STORE_OAUTH_TOKEN' });
}

function* oauthFailure(error) {
  yield put({ type: 'OAUTH_LOGIN_CLOSED', error });
}

function* userLogin() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const authResult = yield call(() => new Promise((resolve, reject) => {
      return firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const { credential, additionalUserInfo } = result;
          const {
            email, name, picture, id,
          } = additionalUserInfo.profile;
          const payload = {
            profileObj: {
              userName: name,
              googleId: id,
              avatar: picture,
              email,
            },
            tokenObj: credential,
          };
          resolve(payload);
        })
        .catch((error) => reject(error));
    }));
    yield all([
      storeUserData(authResult.profileObj),
      storeToken(authResult.tokenObj),
    ]);
    yield put({ type: 'LOGIN_SUCCESS', payload: authResult.profileObj });
  } catch (error) {
    yield oauthFailure(error);
  }
}

function* checkLogin() {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  const isUserLogin = typeof accessToken === 'string' && accessToken;
  if (isUserLogin) {
    const payload = {
      googleId: localStorage.getItem('googleId'),
      userName: localStorage.getItem('userName'),
      avatar: localStorage.getItem('avatar'),
      email: localStorage.getItem('email'),
    };
    yield put({ type: 'USER_HAS_LOGIN', payload });
  } else {
    yield put({ type: 'USER_NOT_LOGIN' });
  }
}

function* userLogout() {
  try {
    const cookies = new Cookies();
    cookies.remove('accessToken');
    localStorage.removeItem('googleId');
    localStorage.removeItem('userName');
    localStorage.removeItem('avatar');
    localStorage.removeItem('email');
    yield put({ type: 'USER_HAS_LOGOUT' });
  } catch (error) {
    yield put({ type: 'USER_NOT_LOGOUT' });
  }
}

function* userSaga() {
  yield takeEvery('OAUTH_LOGIN', userLogin);
  yield takeEvery('OAUTH_LOGOUT', userLogout);
  yield takeEvery('CHECK_LOGIN', checkLogin);
  yield takeEvery('OAUTH_LOGIN_FAILURE', oauthFailure);
}

export default userSaga;
