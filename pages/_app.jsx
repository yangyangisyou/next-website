import React from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled';
import storeFactory from '../utils/storeFactory';
import GlobalStyle from '../shared/styles/Global';
import Navigation from '../shared/components/navigation';
import Footer from '../shared/components/footer';

const BodyWrapper = styled.div`
  background-color: #f5f5f5;
`;

const store = storeFactory();

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <Provider store={store}>
      <GlobalStyle>
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
