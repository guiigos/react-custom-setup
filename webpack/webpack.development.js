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
        test: /\.(s(a|c)ss)$/,
        exclude: /node_modules/,
        use: ['sass-loader', 'style-loader', 'css-loader'], // postcss-loader
      },
    ],
  },
};
