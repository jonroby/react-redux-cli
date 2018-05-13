const handleOption = require('../helpers/handleOption');
const sagaStrings = require('./sagaStrings');
const rootSagaStrings = require('./rootSagaStrings');
const sagaHelpersStrings = require('./sagaHelpersStrings');

function handleCreateSaga(d, fp) {
  const args = {
    filepaths: [fp.saga.ae, fp.rootSaga, fp.sagaHelpers.ae],
    strings: [sagaStrings, rootSagaStrings, sagaHelpersStrings],
  };

  handleOption(d, fp, args);
}

module.exports = handleCreateSaga;
