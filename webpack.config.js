/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable no-var */
/* eslint-disable import/newline-after-import */
const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: {
    bundle: [`${SRC_DIR}/header/index.jsx`, `${SRC_DIR}/footer/index.jsx`],
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
    ],
  }
};