// types
export const types = {
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILED: 'FETCH_USER_FAILED',
};

// Creators
export const fetchUser = payload =>
  ({ type: types.FETCH_USER, payload });
export const fetchUserSuccess = payload =>
  ({ type: types.FETCH_USER_SUCCESS, payload });
export const fetchUserFailed = payload =>
  ({ type: types.FETCH_USER_FAILED, payload });
