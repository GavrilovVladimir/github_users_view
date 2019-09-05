import { call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from '../../action/constant';


function fetchData(user, url = '') {
  return axios({
    method: 'get',
    url: `https://api.github.com/users/${user}${url}`,
  });
}

export default function* sagaFetch(action) {
  try {
    const checkUser = yield call(fetchData, action.user); // переписать на одну функ
    const [repos, orgs] = yield all([
      call(fetchData, action.user, '/repos'),
      call(fetchData, action.user, '/orgs'),
    ]);
    const userName = checkUser.data.login;
    const repositories = repos.data.map(item => item.name);
    const organizations = orgs.data.map(item => item.login);

    yield put({
      type: USER_FETCH_SUCCEEDED, repositories, organizations, userName,
    });
  } catch (error) {
    yield put({ type: USER_FETCH_FAILED, error });
  }
}
