const handleOption = require('../helpers/handleOption');
const connectedComponentStrings = require('./connectedComponentStrings');

function handleCreateConnectedComponent(d, fp) {
  const args = {
    filepaths: [fp.component.ae],
    strings: [connectedComponentStrings]
  };

  handleOption(d, fp, args);
}

module.exports = handleCreateConnectedComponent;
