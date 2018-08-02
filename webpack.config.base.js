/**
 * Base webpack config used across other specific configs
 */

const path = require('path');
const { dependencies: externals } = require('./app/package.json');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['react-hot-loader/babel']
            }
          },
          'ts-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',

    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  // https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: [path.join(__dirname, 'app'), 'node_modules']
  },

  plugins: [],

  externals: Object.keys(externals || {})
};
