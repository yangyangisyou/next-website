import React from 'react';
import styled from '@emotion/styled';
import GoogleLoginTool from 'react-google-login';

// const GoogleLoginWrapper = styled.div`
//     display: flex;
//     margin: 25px;
//     height: 42px;
//     background-color: #fcfcfc;
//     border-radius: 2px;
//     box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .2);
//     cursor: pointer;
//     cursor: hand;
//     transition: all 400ms ease 0s;

//     .google-icon-wrapper {
//         position: absolute;
//         margin-top: 1px;
//         margin-left: 1px;
//         width: 40px;
//         height: 40px;
//         border-radius: 2px;
//         user-select: none;
//     }

//     .google-icon-svg {
//         position: absolute;
//         margin-top: 11px;
//         margin-left: 11px;
//         width: 18px;
//         height: 18px;
//         user-select: none;
//     }

//     .btn-text {
//         float: right;
//         margin: 11px 14px 40px 40px;
//         color: #757575;
//         font-size: 14px;
//         letter-spacing: .2px;
//         user-select: none;
//         white-space: nowrap;
//     }

//     .google-btn:hover {
//         box-shadow: 0 3px 8px rgba(117, 117, 117, .5);
//         user-select: none;
//     }

//     .google-btn:active {
//         box-shadow: 0 1px 1px #757575;
//         background: #F8F8F8;
//         color: #fff;
//         user-select: none;
//     }

// `;

const GoogleLogin = () => {
  return (
    <GoogleLoginTool
      clientId="860219610175-krhno9gho8fce69cu770kemaagm1j7tl.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={(res) => {
        console.log('res ', res);
      }}
      onFailure={() => {}}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLogin;
