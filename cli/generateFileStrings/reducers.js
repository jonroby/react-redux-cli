const { toConstant } = require('../helpers/convertVariables');

const reducers = (d, fp) => {
  return (`import { types } from '${fp.actions.r_}';

export const initialState = {

};

const ${d.filename}Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.${toConstant(d.action)}:
      return state;
    default:
      return state;
  }
};

export default ${d.filename}Reducer;\n`);
}

module.exports = reducers;
