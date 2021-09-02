export function oauthLogin(payload) {
  return {
    type: 'OAUTH_LOGIN',
    payload,
  };
}

export function oauthFailure(payload) {
  console.log('payload: ', payload);
  return {
    type: 'OAUTH_LOGIN_FAILURE',
    error: '登入失敗',
  };
}
