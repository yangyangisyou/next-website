import { put, call, takeEvery } from 'redux-saga/effects';
// import { get } from '../../utils/REST';
import examlist from '../../../mocks/examlist.json';
import readingExams from '../../../mocks/example/readingExams.json';

function* fetchExamList(action) {
  const { numOfPage } = action;
  try {
    // const result = yield call(get, url);
    const result = yield call(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return examlist;
    });
    yield put({ type: 'EXAM_LIST', payload: result });
  } catch (error) {
    yield put({ type: 'EXAM_LIST_FAILURE', error });
  }
}

function* fetchExam() {
  try {
    // const result = yield call(get, url);
    const result = yield call(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return readingExams;
    });
    yield put({ type: 'EXAM_QUESTIONS', payload: result });
  } catch (error) {
    yield put({ type: 'EXAM_QUESTIONS_FAILURE', error });
  }
}

function* categorySaga() {
  yield takeEvery('REQUEST_EXAM_LIST', fetchExamList);
  yield takeEvery('REQUEST_EXAM_QUESTIONS', fetchExam);
}

export default categorySaga;
