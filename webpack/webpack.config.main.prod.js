/**
 * Build config for electron 'Main Process' file
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',

  devtool: 'source-map',

  entry: ['./main.dev'],

  // 'main.js' in root
  output: {
    path: path.join(__dirname, '..'),
    filename: './main.js'
  },

  plugins: [
    // Add source map support for stack traces in node
    // https://github.com/evanw/node-source-map-support
    // new webpack.BannerPlugin(
    //   'require("source-map-support").install();',
    //   { raw: true, entryOnly: false }
    // ),
  ],

  /**
   * Set target to Electron specific node.js env.
   * https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
   */
  target: 'electron-main',

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  }
});
