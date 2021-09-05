// export function oauthLogin(payload) {
//   return {
//     type: 'OAUTH_LOGIN',
//     payload,
//   };
// }

export function oauthFailure() {
  return {
    type: 'OAUTH_LOGIN_FAILURE',
    error: '登入失敗',
  };
}

export function userLogin() {
  return {
    type: 'OAUTH_LOGIN',
  };
}

export function checkLogin() {
  return {
    type: 'CHECK_LOGIN',
  };
}
