const { toConstant } = require('../helpers/convertVariables');

const reducers = (d, fp) => {

  if (d.isPure) {
    
  }

  const caseExps =
        actionConstants.map(ac => {
          return `case types.${ac}:
        return state;\n`;
        }).reduce((acc, curr) => {
          return acc.concat(curr);
        }, '');

  return (`import { types } from '${fp.actions.r_}';

export const initialState = {

};

const ${d.filename}Reducer = (state = initialState, action) => {
  switch (action.type) {
    ${caseExps}
    default:
      return state;
  }
};

export default ${d.filename}Reducer;\n`);
}

module.exports = reducers;
