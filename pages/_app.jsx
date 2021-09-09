import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled';
import storeFactory from '../utils/storeFactory';
import GlobalStyle from '../shared/styles/Global';
import Navigation from '../shared/components/navigation';
import Footer from '../shared/components/footer';
import SEO from '../shared/components/seo';
import '../utils/firebase';

const BodyWrapper = styled.div`
  background-color: #f5f5f5;
`;

const store = storeFactory();

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const SEOConfig = useMemo(() => ({
    title: '喵學｜你的英文學習好夥伴',
    description: '「喵學」盼能透過建立學習資源網絡，讓自主學習者能找到合適的成長方法，進而成為自己想成為的人，並從中培養共好精神。目前正積極打造「可共編的學習資源平台」。',
    keywords: '喵學',
    author: '喵學',
    copyright: '喵學',
    imgLink: '/catRead.jpeg',
    iconLink: '/logo.png',
    link: `https://meowedu.yyisyou.tw${router.asPath}`,
  }), [router.asPath]);
  return (
    <Provider store={store}>
      <GlobalStyle>
        <SEO config={SEOConfig} />
        <Navigation />
        <BodyWrapper>
          <Component
            {...pageProps}
            router={router}
          />
        </BodyWrapper>
        <Toaster />
        <Footer />
      </GlobalStyle>
    </Provider>
  );
};

export default App;
