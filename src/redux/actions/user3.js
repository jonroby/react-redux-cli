export const types = {
  FETCH2: "FETCH2",
  FETCH2_SUCCESS: "FETCH2_SUCCESS",
  FETCH2_FAILURE: "FETCH2_FAILURE",
};

export const fetch2 = payload => ({
  type: types.FETCH2,
  payload
});
export const fetch2Success = payload => ({
  type: types.FETCH2_SUCCESS,
  payload
});
export const fetch2Failure = payload => ({
  type: types.FETCH2_FAILURE,
  payload
});
