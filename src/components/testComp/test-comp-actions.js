export const types = {
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
};

export const fetchUser = payload =>
  ({ type: types.FETCH_USER, payload });

export const fetchUserSuccess = payload =>
  ({ type: types.FETCH_USER_SUCCESS, payload });

export const fetchUserFailure = payload =>
  ({ type: types.FETCH_USER_FAILURE, payload });
