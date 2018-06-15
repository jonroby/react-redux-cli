const { toConstant } = require('../helpers/convertVariables');

const action = (d) => {
  const types =
        d.actionConstants
        .map((a, i) => i === d.actionConstants.length-1 ? `  ${a}: "${a}",` : `  ${a}: "${a}",\n`)
        .reduce((acc, curr) => acc.concat(curr), '');

  const exps =
        d.actionConstants
        .map((a, i) => [a, d.actionCamels[i]])
        .map(a => {
          return `export const ${a[1]} = payload => ({
  type: types.${a[0]},
  payload
});\n`})
        .join('');

  return `export const types = {
${types}
};

${exps}`;
}

module.exports = action;
