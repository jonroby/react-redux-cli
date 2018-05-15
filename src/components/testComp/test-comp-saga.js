import { call, put, takeEvery } from 'redux-saga/effects';
import graphql from '../../redux/api';
import { query, transform } from './test-comp-saga-helpers';
import {
  fetchUserSuccess,
  fetchUserFailure,
  types,
} from './test-comp-actions';

export function* fetchUserQuery({ payload }) {
  const data = yield call(graphql.query(query()), payload);

  const { response, error } = transform(data);

  if (error) {
    yield put(fetchUserFailure(error));
  }

  if (response) {
    yield put(fetchUserSuccess(response));
  }
}

function* saga() {
  yield takeEvery(types.FETCH_USER, fetchUserQuery);
}

export default saga;
