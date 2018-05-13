// matches reducers from actions
// const createReducerFile = (rdcr, component, dir) => {
//   // eventually use rdcr for the individual action.
//   const actionsFilePrefix = convertVariables.toKabob(component);
//
//   const actionsExist = fs.existsSync(`${dir}/${component}-actions.js`);
//   let file;
//   if (actionsExist) {
//     file = fs.readFileSync(`${dir}/${component}-actions.js`, 'utf8');
//   }
//
//   let constants = [];
//   if (file) {
//     const matches = file.match(/  [\w]+:/g);
//     if (matches) {
//       constants = matches.map(x => x.trim().replace(':', ''));
//     }
//   }
//
//   const reducer = `${component}Reducer`;
//   const importActions = `${actionsFilePrefix}-actions`;
//
//   if (constants.length === 0) {
//     return reducerStrings.defaultReducerFile(importActions, reducer);
//   }
//
//   return reducerStrings.customReducerFile(importActions, reducer, constants);
// };
