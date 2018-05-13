const changeString = (str, newStr, regExp) => {
  const match = str.match(regExp);

  if (match) {
    const fullStr = match[0].replace(match[1], newStr);
    return str.replace(regExp, fullStr);
  }

  return str;
};

const addToFileString = (d, fp, strings, fileString) => {
  // This check should be placed in a central location.
  if (d.actionOption === '') return fileString;

  const additions = strings.createAdditions(d, fp);

  // If reg0 and str0 are assigned to null, this function will assume that a
  // actions have been imported.
  const noImportedActions = additions[0] &&
                            additions[0].reg0 !== null &&
                            fileString.match(additions[0].reg0);

  let updatedString = fileString;
  additions.forEach(addition => {
    if (noImportedActions) {
      updatedString = changeString(updatedString, addition.str0, addition.reg0);
    } else {
      updatedString = changeString(updatedString, addition.str1, addition.reg1);
    }
  });

  return updatedString;
};

function createFileString(d, fp, strings) {
  const fileString = strings.createDefaultFileString(d, fp);

  if (d.actionOption !== '') {
    return addToFileString(d, fp, strings, fileString);
  }

  return fileString;
}

module.exports = { addToFileString, createFileString };
