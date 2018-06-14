const createAdditions = (d, fp) => ([
  {
    str0: null,
    reg0: null,
    str1: `\nimport ${d.component}Saga from '../../components/${d.component}/${fp.saga._}';\n`,
    reg1: /;\n(\n)export/,
  },
  {
    str0: null,
    reg0: null,
    str1: `\n    call(${d.component}Saga),\n`,
    reg1: /\),(\n)  ];/,
  },
]);

const createDefaultFileString = () => '';

module.exports = { createAdditions, createDefaultFileString };
