import React from 'react';
import GoogleLoginTool from 'react-google-login';
import { oauthLogin, oauthFailure } from '../../../redux/actions/user';

const GoogleLogin = () => {
  return (
    <GoogleLoginTool
      clientId="860219610175-krhno9gho8fce69cu770kemaagm1j7tl.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={oauthLogin}
      onFailure={oauthFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLogin;
