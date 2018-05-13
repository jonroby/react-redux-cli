const convertVariables = require('./convertVariables');

function getFilepath(component) {
  const kabob = `${convertVariables.toKabob(component)}`;
  const capitalized = `${convertVariables.toCapitalized(component)}`;

  const path = `./src/components/${component}`;

  const fp = {
    path: `./src/components/${component}`,
    rootSaga: './src/redux/sagas/index.js',
    rootReducer: './src/redux/reducers/index.js',
  }

  const fileSuffixes = [
    { name: 'actions',          suffix: '-actions',             case: kabob },
    { name: 'reducer',          suffix: '-reducer',             case: kabob },
    { name: 'saga',             suffix: '-saga',                case: kabob },
    { name: 'scss',             suffix: '-styles',              case: kabob },
    { name: 'sagaHelpers',      suffix: '-saga-helpers',        case: kabob },
    { name: 'component',        suffix: '',                     case: capitalized },
  ];

  fileSuffixes.forEach(suffix => {
    fp[suffix.name] = {
      e: `${suffix.case}${suffix.suffix}.js`,
      _: `${suffix.case}${suffix.suffix}`,
      ae: `${path}/${suffix.case}${suffix.suffix}.js`,
      a_: `${path}/${suffix.case}${suffix.suffix}`,
      re: `./${suffix.case}${suffix.suffix}.js`,
      r_: `./${suffix.case}${suffix.suffix}`,
    };
  });

  return fp;
}

module.exports = getFilepath;
