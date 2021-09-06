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
  const { access_token, id_token, expires_in } = tokenObj;
  cookies.set('accessToken', access_token, { maxAge: expires_in });
  cookies.set('idToken', id_token, { maxAge: expires_in });
  yield put({ type: 'STORE_OAUTH_TOKEN' });
}

function* oauthFailure(error) {
  yield put({ type: 'OAUTH_LOGIN_CLOSED', error });
}

function* userLogin() {
  try {
    const config = {
      clientId: '860219610175-krhno9gho8fce69cu770kemaagm1j7tl.apps.googleusercontent.com',
      cookiePolicy: 'single_host_origin',
    };
    yield call(window.gapi.auth2.init, config);
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    const signInResult = yield call(GoogleAuth.signIn, config);
    const { Ws, Zb } = signInResult;
    const payload = {
      profileObj: {
        userName: Ws.Pe,
        googleId: Ws.US,
        avatar: Ws.wJ,
        email: Ws.Ht,
      },
      tokenObj: Zb,
    };
    console.log('signInResult ', signInResult);
    yield all([
      storeUserData(payload.profileObj),
      storeToken(payload.tokenObj),
    ]);
    yield put({ type: 'LOGIN_SUCCESS', payload: payload.profileObj });
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
