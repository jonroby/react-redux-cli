const convertVariables = require('./convertVariables');

const createActionConstants = (action, isPure) => {
  const actionConstant = convertVariables.toConstant(action);

  const constants = [actionConstant];
  if (!isPure) {
    constants.push(`${actionConstant}_SUCCESS`);
    constants.push(`${actionConstant}_FAILURE`);
  }

  return constants;
};

function createActionCamels(action, isPure) {
  const actionCreators = [action];
  if (!isPure) {
    actionCreators.push(`${action}Success`);
    actionCreators.push(`${action}Failure`);
  }

  return actionCreators;
}

module.exports = { createActionConstants, createActionCamels };
