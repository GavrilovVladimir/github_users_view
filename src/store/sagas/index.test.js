import { takeLatest } from 'redux-saga/effects';
import sagaWatcher from '.';
import { USER_FETCH_REQUESTED } from '../action/constant';
import sagaFetch from './sagaFetch';


describe('sagaWatcher', () => {
  it('call sagaWatcher ', () => {
    const action = {};
    const gen = sagaWatcher(action);

    expect(gen.next().value).toEqual(takeLatest(USER_FETCH_REQUESTED, sagaFetch));
  });
});
