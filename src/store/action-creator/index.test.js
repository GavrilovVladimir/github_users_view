import userRequest from './index';
import { USER_FETCH_REQUESTED } from '../action/constant';


describe('action', () => {
  it('adding user', () => {
    const user = 'notAnon';
    expect(userRequest(user))
      .toEqual({
        type: USER_FETCH_REQUESTED,
        user,
      });
  });
});
