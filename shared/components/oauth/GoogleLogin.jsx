import React, { useCallback } from 'react';
import GoogleLoginTool from 'react-google-login';
import { useDispatch } from 'react-redux';
import { oauthLogin, oauthFailure } from '../../../redux/actions/user';

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const onSuccess = useCallback((payload) => dispatch(oauthLogin(payload), [dispatch, oauthLogin]));
  const onFailure = useCallback((payload) => dispatch(oauthFailure(payload), [dispatch, oauthLogin]));
  return (
    <GoogleLoginTool
      clientId="860219610175-krhno9gho8fce69cu770kemaagm1j7tl.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLogin;
