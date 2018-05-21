const fs = require('fs');

const {
  additionalTransforms,
  transformFileStrings,
  transforms,
} = require('./transformFileStrings');

const generateFileStrings = require('./generateFileStrings');

function handle(d, fp) {
  console.log('d ', d);
  console.log('fp ', fp)
  const fileExists = fs.existsSync(fp[d.component].ae);

  const filesToTransform = fileExists
        ? [d.actionOption]
        : additionalTransformations(d.actionOption);

  const filesToGenerate = fileExists
        ? []
        : [d.actionOption];

  const fileStringsToTransform = fileStringNames.map(fileStringName => {
    return fs.readFileSync(fp[fileStringName].ae, 'utf8');
  });

  const transformedFileStrings = transformFileStrings(
    fileStringsToTransform,
    transforms,
    d,
    fp
  );

  const generatedFileStrings = generateFileStrings(fileStrings, d, fp);

  generatedFileStrings
    .concat(transformedFileStrings)
    .forEach(fileString => {
      fs.writeFileSync(fileString);
    });
}

module.exports = handle;

