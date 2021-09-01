import { put, call, takeEvery } from 'redux-saga/effects';
// import { get } from '../../utils/REST';
import examlist from '../../../mocks/examlist.json';
import readingExams from '../../../mocks/example/readingExams.json';
// https://developers.google.com/identity/protocols/oauth2
// http://vito-note.blogspot.com/2015/04/google-oauth-20.html
function* userLogin(action) {
  const { profileObj, tokenObj } = action.payload;
  try {
    const result = yield call(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return readingExams;
    });
    yield put({ type: 'EXAM_QUESTIONS', payload: result });
  } catch (error) {
    yield put({ type: 'EXAM_QUESTIONS_FAILURE', error });
  }
}

function* userSaga() {
  yield takeEvery('OAUTH_USER_LOGIN', userLogin);
}

export default userSaga;
