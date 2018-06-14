const fs = require('fs');
const { addToFileString, createFileString } = require('./addToFileString');

function handleFileString(d, fp, fileName, strings) {
  let fileString = '';

  const fileExists = fs.existsSync(fileName);
  if (!fileExists) {
    fileString = createFileString(d, fp, strings);
  } else {
    const currentFileString = fs.readFileSync(fileName, 'utf8');
    fileString = addToFileString(d, fp, strings, currentFileString);
  }
  return { fileString, fileExists };
}

function handleOption(d, fp, args) {
  const { filepaths, strings } = args;

  for (let i = 0; i < filepaths.length; i++) {
    const { fileString, fileExists } = handleFileString(d, fp, filepaths[i], strings[i]);

    if (fileString) {
      fs.writeFileSync(filepaths[i], fileString);

      // If the file already exists there is no need to add to other files like
      // rootSaga, rootReducer, etc, because the assumption is that these have
      // already been imported.
      if (fileExists && i === 0) { break; }
    } else {
      console.log('Sorry. There was an error.');
    }
  }
}

module.exports = handleOption;
