export function oauthLogin(payload) {
  return {
    type: 'OAUTH_USER_LOGIN',
    payload,
  };
}
