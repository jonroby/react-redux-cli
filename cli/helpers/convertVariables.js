const convertVariables = (variable) => {
  // FETCH_SOMETHING
  // fetchSomething
};

const toConstant = (variable) => {
  const firstLetterShouldBeSmall = variable.charAt(0).toLowerCase() + variable.slice(1);
  return firstLetterShouldBeSmall
    .replace(/([A-Z])/g, '_$1')
    .toUpperCase();
};

const toKabob = (variable) => {
  return variable
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase();
}

const toCapitalized = (variable) => {
  const capitalized = variable.charAt(0).toUpperCase() + variable.slice(1);
  return capitalized;
}

module.exports = { toConstant, toKabob, toCapitalized };
