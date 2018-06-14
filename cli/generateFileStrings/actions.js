const { toConstant } = require('../helpers/convertVariables');

const action = (d) => (
`export const types = {
  ${toConstant(d.action)}: "${toConstant(d.action)}"
};

export const ${d.action} = payload => ({
  type: types.${toConstant(d.action)},
  payload
});\n`);

module.exports = action;
