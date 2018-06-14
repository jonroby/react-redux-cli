const { parse } = require('babylon');
const { transform } = require('babel-core');

const actions = require('./actions');
const components = require('./components');
const reducers = require('./reducers');
const rootReducer =  require('./rootReducer');
// const saga =  ('./saga');
// const rootSaga =  ('./rootSaga');

const transforms = {
  actions,
  components,
  reducers,
  rootReducer,
  // saga
  // rootSaga
}

const additionalTransforms = {
  actions: [],
  components: [],
  reducers: ['rootReducer'],
  sagas: ['rootSaga'],
}

const transformFileString = (fileString, d, fp) => {
  return transform(fileString, {
    parserOpts: {
      sourceType: "module",
      plugins: [
        "jsx",
        "flow"
      ]
    },
    plugins: [transforms[d.filetype](d, fp)]
  });
}

module.exports = {
  // transforms,
  additionalTransforms,
  transformFileString,
}
