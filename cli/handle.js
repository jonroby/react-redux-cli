const fs = require("fs");

const {
  additionalTransforms,
  transformFileString
} = require("./transformFileStrings");

const generateFileString = require("./generateFileStrings");

function handle(d, fp) {
  const fileExists = fs.existsSync(fp[d.filetype].ae);

  const filesToTransform = fileExists
    ? [d.filetype]
    : additionalTransforms[d.filetype] || [];

  const filesToGenerate = fileExists ? [] : [d.filetype];

  const fileStringsToTransform = filesToTransform.map(fileToTransform => {
    const fileString = fs.readFileSync(fp[fileToTransform].ae, {
      encoding: "utf8"
    });
    return {
      fileString,
      filePath: fp[fileToTransform].ae,
      filetype: fileToTransform
    };
  });

  const transformedFileString = fileStringsToTransform.map(file => {
    return {
      path: file.filePath,
      fileString: transformFileString(
        file.fileString,
        { ...d, filetype: file.filetype },
        fp
      ).code
    };
  });

  const generatedFileStrings = filesToGenerate.map(fileToGenerate => {
    return {
      path: fp[d.filetype].ae,
      fileString: generateFileString[fileToGenerate](d, fp)
    };
  });

  generatedFileStrings.concat(transformedFileString).forEach(fstr => {
    if (d.filetype === "components" && !fs.existsSync(fp.folderPath)) {
      fs.mkdirSync(fp.folderPath);
    }
    fs.writeFileSync(fstr.path, fstr.fileString, "utf8");
  });
}

module.exports = handle;
