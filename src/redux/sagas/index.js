import { all, call } from 'redux-saga/effects';
import userSaga from '../../components/user/user-saga';
import testCompSaga from '../../components/testComp/test-comp-saga';

export default function* rootSaga() {
  yield all([
    call(userSaga),
  ]);
}

