import { types } from './test-comp-actions';

export const initialState = {

};

const testCompReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER:
      return state;
    case types.FETCH_USER_SUCCESS:
      return state;
    case types.FETCH_USER_FAILED:
      return state;
    default:
      return state;
  }
};

export default testCompReducer;
