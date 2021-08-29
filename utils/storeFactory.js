import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../redux/reducers';
import rootSaga from '../redux/sagas';

const storeFactory = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
      rootReducer, 
      applyMiddleware(logger, sagaMiddleware),
      // window && window.devToolsExtension && window.devToolsExtension(),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default storeFactory;
