const createAdditions = (d, fp) => {
  function createCaseTypes(constants) {
    return constants.map(constant => (
`    case types.${constant}:
      return state;\n`));
  }

  const actionTypes = createCaseTypes(d.actionConstants);

  return [{
    str0: null,
    reg0: null,
    str1: `${actionTypes.join('')}    default:`,
    reg1: /(    default:)/,
  }]
};

function createDefaultFileString(d, fp) {
  return (`import { types } from '${fp.actions.r_}';

export const initialState = {

};

const ${d.component}Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ${d.component}Reducer;\n`);
}

module.exports = {
  createDefaultFileString,
  createAdditions,
};
