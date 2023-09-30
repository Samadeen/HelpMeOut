const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    popup: path.resolve('./src/popup/popup.tsx'),
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('./src/assets/manifest.json'),
          to: path.resolve('dist'),
        },
        {
          from: path.resolve('./src/assets/logo.png'),
          to: path.resolve('dist'),
        },
      ],
    }),
    new HtmlPlugin({
      title: 'Help Me Out Extension',
      file: 'popup.html',
      chunks: ['popup'],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
  },
};
