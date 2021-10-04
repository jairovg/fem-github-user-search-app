const { merge } = require('webpack-merge');
const utils = require('webpack-lib').utils;
const { ENV_PROD, ENV_DEV } = require('webpack-lib').constants;
const { app, src, build } = require('./build/webpack.constants').PATHS;
const commonConfig = require('./build/webpack.common');

module.exports = ({ [ENV_PROD]: isProduction }) => {
  const mode = isProduction
    ? ENV_PROD
    : ENV_DEV;

  const envConfig = isProduction
    ? require('./build/webpack.prod')({ paths: src })
    : require('./build/webpack.dev');
  return merge([
    {
      mode,
      // Entry accepts a path or an object of entries.
      // We'll be using the latter form given it's
      // convenient with more complex configurations.
      entry: {
        app,
      },
    },
    commonConfig,
    envConfig,
  ]);
};
