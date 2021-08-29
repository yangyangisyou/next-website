import { all } from 'redux-saga/effects';
import categorySaga from './category';

export default function* rootSaga() {
  yield all([
    categorySaga(),
  ]);
}
