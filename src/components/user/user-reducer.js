import { types } from './user-actions';

export const initialState = {
  employee: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_USER:
    return state;
  case types.FETCH_USER_SUCCESS:
    return Object.assign({}, state, action.payload);
  case types.FETCH_USER_FAILED:
    return state;
  default:
    return state;
  }
};

export default userReducer;
