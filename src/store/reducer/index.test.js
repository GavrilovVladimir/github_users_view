import reducer, { initialState } from './index';
import { USER_FETCH_SUCCEEDED, USER_FETCH_REQUESTED, USER_FETCH_FAILED } from '../action/constant';


describe('reducer', () => {
  const afterRequestingState = {
    ...initialState,
    statusDownload: USER_FETCH_REQUESTED,
    userName: '',
    repositories: '',
    organizations: '',
    error: '',
  };

  const afterErrorState = {
    ...initialState,
    statusDownload: USER_FETCH_REQUESTED,
    userName: '',
    repositories: '',
    organizations: '',
    error: '',
  };

  it(USER_FETCH_FAILED, () => {
    const action = {
      type: USER_FETCH_FAILED,
      error: 'ALERT!',
    };
    expect(reducer(afterRequestingState, action)).toEqual({
      ...afterRequestingState,
      statusDownload: USER_FETCH_FAILED,
      error: 'ALERT!',
    });
  });


  it(USER_FETCH_REQUESTED, () => {
    const action = {
      type: USER_FETCH_REQUESTED,

    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      statusDownload: USER_FETCH_REQUESTED,
      userName: '',
      repositories: '',
      organizations: '',
      error: '',
    });
  });


  it(USER_FETCH_SUCCEEDED, () => {
    const action = {
      type: USER_FETCH_SUCCEEDED,
      repositories: [],
      organizations: [],
      userName: 'test',

    };
    expect(reducer(afterRequestingState, action)).toEqual({
      ...afterRequestingState,
      statusDownload: USER_FETCH_SUCCEEDED,
      repositories: [],
      organizations: [],
      userName: 'test',
      error: '',
    });
  });


  it('USER_FETCH_REQUESTED after error', () => {
    const action = {
      type: USER_FETCH_REQUESTED,

    };
    expect(reducer(afterErrorState, action)).toEqual({
      ...afterErrorState,
      statusDownload: USER_FETCH_REQUESTED,
      userName: '',
      repositories: '',
      organizations: '',
      error: '',
    });
  });


  it('USER_FETCH_SUCCEEDED after error', () => {
    const action = {
      type: USER_FETCH_SUCCEEDED,
      repositories: [],
      organizations: [],
      userName: 'test',

    };
    expect(reducer(afterErrorState, action)).toEqual({
      ...afterErrorState,
      statusDownload: USER_FETCH_SUCCEEDED,
      repositories: [],
      organizations: [],
      userName: 'test',
      error: '',
    });
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
