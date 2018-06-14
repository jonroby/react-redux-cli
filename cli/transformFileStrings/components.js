const components = (d, fp) => ({ types: t, template }) => {
  return {
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value === fp.actions.r_) {
          path.node.specifiers.push(t.identifier(d.action));
        }
      },
      ObjectExpression(path, state) {
        // the last part should be checked if it is equal to something

        if (path.parent && path.parent && path.parent.callee && path.parent.callee.name === "connect") {
          const objectProperty = t.objectProperty(
            t.identifier(d.action),
            t.identifier(d.action),
            false,
            true // object shorthand syntax
          );
          path.node.properties.push(objectProperty);
        }
      }
    }
  }
}

module.exports = components;
