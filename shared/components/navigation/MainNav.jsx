import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import MenuButton from './MenuButton';
import MenuList from './MenuList';
// import { GiHamburgerMenu } from 'react-icons/gi';

const MainNavWrapper = styled.div`
  height: 80px;
  background-color: #16b9b3;
`;

const FixWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    /* flex-direction: column; */
  }
`;

const LogoWrapper = styled.div`
  margin: 0 15px;
  cursor: pointer;
  z-index: 100;
  & > img {
    height: 50px;
  }
`;

const LinkListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  position: relative;
  /* max-width: 500px; */
  li {
    margin: 10px 15px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileLinkListWrapper = styled.ul`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: relative;
    ul {
      display: none; 
      box-shadow: 0 0 5px rgba(0,0,0, .7); 
      position: absolute; 
      top:0;
    }

    li {
      flex: none; 
      width: 100%;
      border-bottom: solid 1px white;
    } 

    svg[type="menu"]:checked + ul{
      display: block;
      width: 100%;
      background: #999;          
    }

    label {
      display: block;
    }  

    svg[type="menu"]:checked + ul li:nth-child(1){
      background: #777; 
      color: #fff;
    }  
  }
`;

const UserStatusWrapper = styled.div`
    color: rgba(255,255,255,0.7);
    .login {
      cursor: pointer;
    }
    @media (max-width: 767px) {
      display: none;
    }
`;

const GroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainNav = ({
  linkList, onLogin, onLogout, isUserLogin,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MainNavWrapper>
      <FixWrapper>
        <GroupWrapper>
          <Link href="/">
            <LogoWrapper>
              <img src="/logo.png" alt="logo" />
            </LogoWrapper>
          </Link>
          <LinkListWrapper>
            {linkList.map((link) => <li key={link.title}><Link href={link.link}>{link.title}</Link></li>)}
          </LinkListWrapper>
        </GroupWrapper>
        <GroupWrapper>
          <UserStatusWrapper>
            {/* <Link href="/">登入</Link> */}
            {/* import Cookies from 'universal-cookie'; */}
            {
              isUserLogin
                ? <p className="logout" onClick={onLogout} onKeyPress={onLogout} role="presentation">登出</p>
                : <p className="login" onClick={onLogin} onKeyPress={onLogin} role="presentation">登入</p>
            }
          </UserStatusWrapper>
          <MobileLinkListWrapper>
            <MenuList
              open={isMenuOpen}
              list={linkList}
            />
            <MenuButton
              open={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              color="white"
            />
          </MobileLinkListWrapper>
        </GroupWrapper>
      </FixWrapper>
    </MainNavWrapper>
  );
};

export default MainNav;
