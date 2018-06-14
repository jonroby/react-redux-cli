const actions = require( './actions');
const components = require('./components');
const reducers = require( './reducers');
// const rootReducer = require( './rootReducer');
// const sagas = require( './saga');
// const rootSaga = require( './rootSaga');

const generateFileStrings = {
  actions,
  components,
  reducers,
  // rootReducer,
  // saga,
  // rootSaga
}

module.exports = generateFileStrings;
