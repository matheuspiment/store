const HtmlWebpackPlugin = require('html-webpack-plugin');
const { replace } = require('lodash');

/**
 * Injects the required anchor element for React / ReactDOM.
 */
class HtmlWebpackInjectRoot {
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlWebpackInjectRoot', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tap(
        'HtmlWebpackInjectRoot',
        (data) => {
          data.html = replace(data.html, /<body>/, `
            <body>
              <div id="root"></div>`);
          data.html = replace(data.html, /<\/head>/, `
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            </head>`);
        }
      )
    })
  }
}

module.exports = HtmlWebpackInjectRoot
