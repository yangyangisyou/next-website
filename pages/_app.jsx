import React from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import storeFactory from '../utils/storeFactory';
import GlobalStyle from '../shared/styles/Global';

const store = storeFactory();

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <Provider store={store}>
      <GlobalStyle>
        <Component
          {...pageProps}
          router={router}
        />
        <Toaster />
      </GlobalStyle>
    </Provider>
  );
};

export default App;
