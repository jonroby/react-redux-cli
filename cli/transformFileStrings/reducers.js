const reducers = (d, fp) => ({ types: t, template }) => {
  return {
    visitor: {
      SwitchStatement(path) {
        for (let i = 0; i < d.actionConstants.length; i++) {
          const switchDefault = path.node.cases.pop();
          const switchSt = t.switchCase(
            t.identifier(`types.${d.actionConstants[i]}`),
            [t.expressionStatement(
              t.identifier('return state')
            )]
          );

          path.node.cases.push(switchSt);
          path.node.cases.push(switchDefault);
        }
      },
    }
  }
}

module.exports = reducers;
