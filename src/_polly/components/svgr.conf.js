// .svgrrc.js
module.exports = {
  template: (variables, { tpl }) => {
    return tpl`
${variables.imports};

${variables.interfaces};

export const ReactComponent = (${variables.props}) => (
  ${variables.jsx}
);
`
  },
  filenameCase: 'kebab',
  ext: 'svg.jsx',
  index: false,
  jsxRuntime: 'automatic'
}
