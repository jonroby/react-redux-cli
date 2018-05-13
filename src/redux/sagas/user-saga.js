import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserFailed, types } from '../actions/user-actions';
import queries from '../queries';
import userSagaTransform from './transforms/user-saga-transform';

export function* fetchUserQL({ payload }) {
  const data = yield call(queries['userQuery'], payload);

  const transformedData = userSagaTransform(data);

  if (transformedData.errors) {
    yield put(fetchUserFailed('Check Terminal for errors'));
  }

  if (transformedData.data) {
    yield put(fetchUserSuccess(transformedData.data));
  }
}

function* saga() {
  yield takeEvery(types.FETCH_USER, fetchUserQL);
}

export default saga;
