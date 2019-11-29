module.exports = function ({ types: t }) {
  return {
    visitor: {
      MemberExpression: {
        enter({ node }) {
          var prop = node.property;
          if(node.computed &&
             prop.type === 'UnaryExpression' &&
             prop.operator === '-' &&
             prop.prefix === true) {
            node.property = t.binaryExpression('-',
              t.memberExpression(node.object, t.identifier('length'), false),
              prop.argument);
          }
        }
      }
    }
  };
}
