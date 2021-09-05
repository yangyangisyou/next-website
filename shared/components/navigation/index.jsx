import React, { useCallback, useMemo, useEffect } from 'react';
import styled from '@emotion/styled';
// import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Script from 'next/script';
import MainNav from './MainNav';
import SubNav from './SubNav';
import { userLogin, checkLogin } from '../../../redux/actions/user';

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
  const userState = useSelector((state) => state.user);
  const isUserLogin = useMemo(() => userState.googleId, [userState]);
  const onLogin = useCallback(() => dispatch(userLogin()), [userLogin, dispatch]);
  useEffect(() => {
    dispatch(checkLogin());
  }, []);
  return (
    <NavigationWrapper>
      <Script
        id="stripe-js"
        src="https://apis.google.com/js/api.js"
        onLoad={() => window.gapi.load('auth2')}
      />
      <MainNav linkList={linkList} onLogin={onLogin} isUserLogin={isUserLogin} />
      {/* <SubNav list={CATEGORY_LINK} /> */}
    </NavigationWrapper>
  );
};

export default Navigation;
