const handleOption = require('../helpers/handleOption');
const actionStrings = require('./actionStrings');

function handleCreateActions(d, fp) {
  const args = {
    filepaths: [fp.actions.ae],
    strings: [actionStrings],
  };

  handleOption(d, fp, args);
}

module.exports = handleCreateActions;
