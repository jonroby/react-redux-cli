const createAdditions = (d, fp) => {
  return [
    {
      str0: null,
      reg0: null,
      str1: `\nimport ${d.component}Reducer from '../../components/${d.component}/${fp.reducer._}';\n\n`,
      reg1: /;(\n\n)export/,
    },
    {
      str0: null,
      reg0: null,
      str1: `  ${d.component}: ${d.component}Reducer,\n}`,
      reg1: /export default combineReducers\({[a-zA-Z\n\s:, ]+(})/,
    },
  ];
};

const createDefaultFileString = () => '';

module.exports = { createAdditions, createDefaultFileString };
