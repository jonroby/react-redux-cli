import { types } from '../../redux/actions/user2';

export const initialState = {};

const user2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH1:
      return state;

    case types.FETCH2:
      return state;

    case types.FETCH2:
      return state;

    case types.FETCH2_SUCCESS:
      return state;

    case types.FETCH2_FAILURE:
      return state;

    default:
      return state;
  }
};

export default user2Reducer;