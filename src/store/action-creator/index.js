import { USER_FETCH_REQUESTED } from '../action/constant';


export default function userRequest(user) {
  return {
    type: USER_FETCH_REQUESTED,
    user,
  };
}
