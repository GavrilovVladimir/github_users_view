import { takeLatest } from 'redux-saga/effects';
import sagaFetch from './sagaFetch';
import { USER_FETCH_REQUESTED } from '../action/constant';


function* sagaWatcher() {
  yield takeLatest(USER_FETCH_REQUESTED, sagaFetch);
}

export default sagaWatcher;
