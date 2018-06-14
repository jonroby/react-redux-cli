const { toKabob } = require("../helpers/convertVariables");

const rootReducer = (d, fp) => ({ types: t, template }) => {
  return {
    visitor: {
      Program(path) {
        console.log("path ", path);
        const imp = t.importDeclaration(
          [t.importDefaultSpecifier(t.identifier(`${d.filename}Reducer`))],
          t.stringLiteral(`./${toKabob(d.filename)}-reducer`)
        );

        const lastImport = path
          .get("body")
          .filter(p => p.isImportDeclaration())
          .pop();

        if (lastImport) lastImport.insertAfter(imp);
      },
      ObjectExpression(path, state) {
        // the last part should be checked if it is equal to something
        if (
          path.parent &&
          path.parent &&
          path.parent.callee &&
          path.parent.callee.name === "combineReducers"
        ) {
          const objectProperty = t.objectProperty(
            t.identifier(d.filename),
            t.identifier(`${d.filename}Reducer`)
          );
          path.node.properties.push(objectProperty);
        }
      }
    }
  };
};

module.exports = rootReducer;
