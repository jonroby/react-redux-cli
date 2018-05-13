const handleCreateActions = require('../actions/handleCreateActions');
const handleCreateReducer = require('../reducer/handleCreateReducer');
const handleCreateSaga = require('../saga/handleCreateSaga');
const handleCreateConnectedComponent = require('../connectedComponent/handleCreateConnectedComponent');

function handleDefault(d, fp) {
  handleCreateActions(d, fp);
  handleCreateReducer(d, fp);
  handleCreateConnectedComponent(d, fp);

  if (!d.isPure) {
    handleCreateSaga(d, fp);
  }
}

module.exports = handleDefault;
