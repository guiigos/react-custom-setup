const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/template.development.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, '../public/'),
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [
          /\.module\.css$/,
          /node_modules/,
        ],
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.module\.css$/,
        exclude: /node_modules/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }],
      },
    ],
  },
};
