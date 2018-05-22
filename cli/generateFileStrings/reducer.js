export const function reducerFileString(d, fp) {
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

