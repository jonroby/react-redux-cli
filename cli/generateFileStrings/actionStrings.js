const createDefaultFileString = () => (
`export const types = {

};\n`);

function createAdditions(d, fp) {
  function createActionTypes(actionConstants) {
    return actionConstants.map(actionConstant => (
`\n  ${actionConstant}: '${actionConstant}',`));
  }

  function createActionCreators(actionCamels, actionConstants) {
    return actionCamels.map((actionCamel, i) => (
`\nexport const ${actionCamel} = payload =>
  ({ type: types.${actionConstants[i]}, payload });\n`));
  }

  const actionTypes = createActionTypes(d.actionConstants);
  const actionCreators = createActionCreators(d.actionCamels, d.actionConstants);
  return [
    {
      str0: `${actionTypes.join('')}`,
      reg0: /export const types = {(\n)\n}/,
      str1: `${actionTypes.join('')}\n}`,
      reg1: /export const types = {[a-zA-Z\n\s:,'_ ]+(\n})/,
    },
    {
      str0: `${actionCreators.join('')}`,
      reg0: /($)/,
      str1: `${actionCreators.join('')}`,
      reg1: /($)/,
    },
  ];
}

module.exports = {
  createAdditions,
  createDefaultFileString,
};
