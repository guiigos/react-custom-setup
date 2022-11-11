const { merge } = require('webpack-merge');
const development = require('./webpack.development');
const production = require('./webpack.production');
const common = require('./webpack.common');

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(common, development);
    case 'production':
      return merge(common, production);
    default:
      throw new Error('No matching configuration was found!');
  }
}
