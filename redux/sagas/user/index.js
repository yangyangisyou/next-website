import {
  put, all, call, takeEvery,
} from 'redux-saga/effects';
import Cookies from 'universal-cookie';
// https://developers.google.com/identity/protocols/oauth2
// http://vito-note.blogspot.com/2015/04/google-oauth-20.html

function* storeUserData(profileObj) {
  const {
    name, googleId, imageUrl, email,
  } = profileObj;
  const payload = {
    id: googleId,
    name,
    avatar: imageUrl,
    email,
  };
  localStorage.setItem('googleId', googleId);
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
        name: Ws.Pe,
        googleId: Ws.US,
        imageUrl: Ws.wJ,
        email: Ws.Ht,
      },
      tokenObj: Zb,
    };
    yield all([
      storeUserData(payload.profileObj),
      storeToken(payload.tokenObj),
    ]);
    yield put({ type: 'LOGIN_SUCCESS', payload });
  } catch (error) {
    yield oauthFailure(error);
  }
}

// function* userLogin(action) {
//     try {
//       const { profileObj, tokenObj } = action.payload;
//       yield all([
//         storeUserData(profileObj),
//         storeToken(tokenObj),
//       ]);
//     } catch (error) {
//       yield oauthFailure(error);
//     }
//   }

function* checkLogin() {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  const isUserLogin = typeof accessToken === 'string' && accessToken;
  if (isUserLogin) {
    const googleId = localStorage.getItem('googleId');
    yield put({ type: 'USER_HAS_LOGIN', payload: { googleId } });
  } else {
    yield put({ type: 'USER_NOT_LOGIN' });
  }
}

function* userSaga() {
  yield takeEvery('OAUTH_LOGIN', userLogin);
  yield takeEvery('CHECK_LOGIN', checkLogin);
  yield takeEvery('OAUTH_LOGIN_FAILURE', oauthFailure);
}

export default userSaga;
