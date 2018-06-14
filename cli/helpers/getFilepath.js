const convertVariables = require("./convertVariables");

function getFilepath(filename) {
  const kabob = `${convertVariables.toKabob(filename)}`;
  const capitalized = `${convertVariables.toCapitalized(filename)}`;
  const lowercased = `${convertVariables.toLowercase(filename)}`;

  const path = type => `./src/redux/${type}`;
  const componentPath = c => `./src/components/${c}`;

  const fp = {
    path: `./src/components/${capitalized}/${capitalized}.js`,
    folderPath: `./src/components/${capitalized}`,
    rootSaga: "./src/redux/sagas/index.js",
    rootReducer: { ae: "./src/redux/reducers/index.js" }
  };

  const fileSuffixes = [
    { name: "actions", suffix: "-actions", case: lowercased },
    { name: "reducers", suffix: "-reducer", case: lowercased },
    { name: "sagas", suffix: "-saga", case: lowercased },
    { name: "sagaTransform", suffix: "-saga-transform", case: lowercased }
  ];

  const component = [{ name: "components", suffix: "", case: capitalized }];

  // e: with extension
  // _: no extension
  // ae: absolute path with extension
  // a_: absolute path with no extension
  // re: relative path with extension
  // r_: relative path with no extension
  fileSuffixes.forEach(suffix => {
    fp[suffix.name] = {
      e: `${suffix.case}${suffix.suffix}.js`,
      _: `${suffix.case}${suffix.suffix}`,
      ae: `${path(suffix.name)}/${suffix.case}.js`,
      a_: `${path(suffix.name)}/${suffix.case}`,
      re: `../../redux/${suffix.name}/${suffix.case}.js`,
      r_: `../../redux/${suffix.name}/${suffix.case}`
    };
  });

  component.forEach(suffix => {
    fp[suffix.name] = {
      e: `${suffix.case}${suffix.suffix}.js`,
      _: `${suffix.case}${suffix.suffix}`,
      ae: `${componentPath(suffix.case)}/${suffix.case}.js`,
      a_: `${componentPath(suffix.case)}/${suffix.case}`
      // re: `../../redux/${suffix.name}/${suffix.case}.js`,
      // r_: `../../redux/${suffix.name}/${suffix.case}`
    };
  });

  return fp;
}

module.exports = getFilepath;
