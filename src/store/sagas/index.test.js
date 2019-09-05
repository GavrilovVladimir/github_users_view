import sagaWatcher  from './';
import { takeLatest } from 'redux-saga/effects';
import {USER_FETCH_REQUESTED} from "../action/constant";
import sagaFetch from "./sagaFetch/";


describe('reducer', () => {

    it('should return the initial state', () => {
        const action ={}
        const gen = sagaWatcher(action);

        expect(gen.next().value).toEqual(takeLatest(USER_FETCH_REQUESTED, sagaFetch));

    });
});
