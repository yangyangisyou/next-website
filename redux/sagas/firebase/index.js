import { put, call, takeEvery } from 'redux-saga/effects';
import {
  getDatabase, ref, child, get,
} from 'firebase/database';
import firebase from '../../../utils/firebase';
// import { get } from '../../utils/REST';
import examlist from '../../../mocks/examlist.json';
import readingExams from '../../../mocks/example/readingExams.json';

function* fetchExamList(action) {
  const { numOfPage } = action;
  try {
    // const result = yield call(get, url);
    const result = yield call(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return examlist;
    });
    yield put({ type: 'EXAM_LIST', payload: result });
  } catch (error) {
    yield put({ type: 'EXAM_LIST_FAILURE', error });
  }
}

function* fetchExam() {
  try {
    const payload = yield call(async () => {
      const database = ref(getDatabase());
      const result = get(child(database, 'exams/reading/1'))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val();
          } else {
            console.log('No data available');
          }
        }).catch((error) => {
          console.log('no');
          console.error(error);
        });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return result;
    });
    yield put({ type: 'EXAM_QUESTIONS', payload });
  } catch (error) {
    yield put({ type: 'EXAM_QUESTIONS_FAILURE', error });
  }
}

function* firebaseSaga() {
  yield takeEvery('REQUEST_EXAM_LIST', fetchExamList);
  yield takeEvery('REQUEST_EXAM_QUESTIONS', fetchExam);
}

export default firebaseSaga;
