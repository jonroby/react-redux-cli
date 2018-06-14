const template = require("babel-template");

const actions = (d, fp) => ({ types: t, template }) => {
  return {
    visitor: {
      Program(path) {
        for (let i = 0; i < d.actionConstants.length; i++) {
          const e = template('export const ACTION_NAME = payload => ({ type: types.ACTION_CONSTANT, payload });', { sourceType: "module" });
          const ast = e({
            ACTION_NAME: t.identifier(d.actionCamels[i]),
            ACTION_CONSTANT: t.identifier(d.actionConstants[i])
          });
          path.node.body.push(ast);
        }
      },
      ExportDeclaration(path) {
        //   path.node.specifiers.push(...);
      },
      ObjectExpression(path) {
        if (path.parent && path.parent.id && path.parent.id.name === 'types') {
          for (let i = 0; i < d.actionConstants.length; i++) {
            const op = t.objectProperty(
  			      t.identifier(d.actionConstants[i]),
  			      t.stringLiteral(d.actionConstants[i])
		        );

            path.node.properties.push(op);
          }
        }
      }
    }
  }
}

module.exports = actions;
