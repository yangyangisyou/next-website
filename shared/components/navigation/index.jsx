import React, { useCallback, useMemo, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
// import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Script from 'next/script';
import MainNav from './MainNav';
import SubNav from './SubNav';
import { userLogin, userLogout, checkLogin } from '../../../redux/actions/user';

const NavigationWrapper = styled.nav`
  white-space: nowrap;
`;

const linkList = [
  {
    title: '找測驗',
    link: '/list',
  },
  {
    title: '找資源',
    link: '/',
  },
  {
    title: '找方向',
    link: '/',
  },
];

const CATEGORY_LINK = [
  {
    title: '聽力',
    link: '/',
    image: '/',
  },
  {
    title: '閱讀',
    link: '/',
    image: '/',
  },
  {
    title: '寫作',
    link: '/',
    image: '/',
  },
];

const Navigation = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(checkLogin());
  }, [checkLogin, dispatch]);
  const userState = useSelector((state) => state.user);
  const userData = useMemo(() => userState.userData, [userState.userData]);
  const onLogin = useCallback(() => dispatch(userLogin()), [userLogin, dispatch]);
  const onLogout = useCallback(() => dispatch(userLogout()), [userLogout, dispatch]);
  return (
    <NavigationWrapper>
      <Script
        id="google-api"
        src="https://apis.google.com/js/api.js"
        onLoad={() => window.gapi.load('auth2')}
      />
      <MainNav
        linkList={linkList}
        onLogin={onLogin}
        onLogout={onLogout}
        userData={userData}
      />
      {/* <SubNav list={CATEGORY_LINK} /> */}
    </NavigationWrapper>
  );
};

export default Navigation;
