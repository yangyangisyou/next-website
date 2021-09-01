import { put, call, takeEvery } from 'redux-saga/effects';
// import { get } from '../../utils/REST';
import examlist from '../../mocks/examlist.json';

function* fetchExamList(action) {
  const { numOfPage } = action;
  try {
    // const result = yield call(get, url);
    const result = yield call(() => examlist);
    yield put({ type: 'LOAD_EXAM_LIST', payload: result });
  } catch (error) {
    yield put({ type: 'LOAD_EXAM_LIST_FAILURE', error });
  }
}

function* categorySaga() {
  yield takeEvery('REQUEST_LOAD_EXAM_LIST', fetchExamList);
}

export default categorySaga;
