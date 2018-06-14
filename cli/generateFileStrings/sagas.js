const fs = require('fs');
const addToFileString = require('../helpers/addToFileString');
const convertVariables = require('../helpers/convertVariables');

function createDefaultFileString(d, fp) {
  const actionConstant = convertVariables.toConstant(d.actionOption);
  const capitalizedAction = convertVariables.toCapitalized(d.actionOption);

  return (
`import { call, put, takeEvery } from 'redux-saga/effects';
import graphql from '../../redux/api';
import { query, transform } from '${fp.sagaHelpers.r_}';
import {
  ${d.actionOption}Success,
  ${d.actionOption}Failure,
  types,
} from '${fp.actions.r_}';

export function* ${d.actionOption}Query({ payload }) {
  const data = yield call(graphql.query(query()), payload);

  const { response, error } = transform(data);

  if (error) {
    yield put(${d.actionOption}Failure(error));
  }

  if (response) {
    yield put(${d.actionOption}Success(response));
  }
}

function* saga() {
  yield takeEvery(types.${actionConstant}, ${d.actionOption}Query);
}

export default saga;\n`
  );
}

function createAdditions() {
  return [];
}

module.exports = { createDefaultFileString, createAdditions };
