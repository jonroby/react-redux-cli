import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserFailed, types } from '../actions/user';
import graphQL from '../api.js';
import { query, transform } from './transforms/user';

// query
// transform
// failure
// success
// types
export function* fetchUserQL({ payload }) {
  console.log("here")
  const data = yield call(graphQL.query(query()), payload);
  console.log("data ", data)

  const transformedData = transform(data);

  if (transformedData.errors) {
    yield put(fetchUserFailed(transformedData.errors));
  }

  if (transformedData.data) {
    yield put(fetchUserSuccess(transformedData.data));
  }
}

function* saga() {
  yield takeEvery(types.FETCH_USER, fetchUserQL);
}

export default saga;
