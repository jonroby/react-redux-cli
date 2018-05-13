const handleOption = require('../helpers/handleOption');
const reducerStrings = require('./reducerStrings');
const rootReducerStrings = require('./rootReducerStrings');

function handleCreateReducer(d, fp) {
  const args = {
    filepaths: [fp.reducer.ae, fp.rootReducer],
    strings: [reducerStrings, rootReducerStrings],
  };

  handleOption(d, fp, args);
}

module.exports = handleCreateReducer;
