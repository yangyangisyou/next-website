import { all } from 'redux-saga/effects';
import firebaseSaga from './firebase';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    firebaseSaga(),
    userSaga(),
  ]);
}
