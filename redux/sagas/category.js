import { put, call, takeEvery } from 'redux-saga/effects';
import { get } from '../../utils/REST';

function* fetchPageData(action) {
    
}

function* categorySaga() {
  yield takeEvery('REQUEST_NOTION_PAGE', fetchPageData);
}

export default categorySaga;
