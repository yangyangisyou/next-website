import styled from '@emotion/styled';
// import Link from 'next/link';
import MainNav from './MainNav';
import SubNav from './SubNav';

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
  return (
    <NavigationWrapper>
      <MainNav linkList={linkList} />
      {/* <SubNav list={CATEGORY_LINK} /> */}
    </NavigationWrapper>
  );
};

export default Navigation;
