import { all } from 'redux-saga/effects';
import categorySaga from './category';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    categorySaga(),
    userSaga(),
  ]);
}
