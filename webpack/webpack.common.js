const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  plugins: [
    new DashboardPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' },
      ],
    }),
    new ESLintPlugin({
      fix: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV_NAME: process.env.NODE_ENV,
      },
    }),
  ],
  entry: path.resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: 'defaults',
              }],
              '@babel/preset-react',
            ],
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      src: path.join(__dirname, '../src'),
      components: path.join(__dirname, '../src/components'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[id].js',
    clean: true, // O QUE ISSO FAZ
  },
};
