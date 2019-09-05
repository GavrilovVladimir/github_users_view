import { USER_FETCH_SUCCEEDED, USER_FETCH_REQUESTED, USER_FETCH_FAILED } from '../action/constant';

export const initialState = {
  userName: '',
  repositories: [],
  organizations: [],
  statusDownload: '',
  error: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      return {
        ...state,
        statusDownload: action.type,
        userName: action.userName,
        repositories: action.repositories,
        organizations: action.organizations,
        error: '',
      };
    case USER_FETCH_REQUESTED:
      return {
        ...state,
        statusDownload: action.type,
        userName: '',
        repositories: '',
        organizations: '',
        error: '',
      };
    case USER_FETCH_FAILED:
      return { ...state, statusDownload: action.type, error: action.error };

    default: return state;
  }
}
