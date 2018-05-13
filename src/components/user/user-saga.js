import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserFailed, types } from './user-actions';
import graphQL from '../../redux/api';
import { query, transform } from './user-query';

// query
// transform
// failure
// success
// types
export function* fetchUserQL({ payload }) {
  const data = yield call(graphQL.query(query()), payload);

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
