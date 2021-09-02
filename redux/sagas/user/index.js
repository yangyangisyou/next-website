import { put, all, takeEvery } from 'redux-saga/effects';
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
  yield put({ type: 'STORE_OAUTH_DATA', payload });
}

function* storeToken(tokenObj) {
  const { access_token, id_token } = tokenObj;
  localStorage.setItem('accessToken', access_token);
  localStorage.setItem('idToken', id_token);
  yield put({ type: 'STORE_OAUTH_TOKEN' });
}

function* oauthFailure(error) {
  yield put({ type: 'OAUTH_LOGIN_FAILURE', error });
}

function* userLogin(action) {
  try {
    const { profileObj, tokenObj } = action.payload;
    yield all([
      storeUserData(profileObj),
      storeToken(tokenObj),
    ]);
  } catch (error) {
    yield oauthFailure(error);
  }
}

function* userSaga() {
  yield takeEvery('OAUTH_LOGIN', userLogin);
  yield takeEvery('OAUTH_LOGIN_FAILURE', oauthFailure);
}

export default userSaga;
