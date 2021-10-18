const { getTestConfig, pluginJsxVue, presetEnv } = require('webpack-lib').babel;
const { ENV_DEV, ENV_PROD } = require('webpack-lib').constants;

/**
 * Setup babel based on environment
 * @see {@link https://babeljs.io/docs/en/options#env}
 */
module.exports = {
  env: {
    [ ENV_DEV ]: {
      plugins: [pluginJsxVue()],
      presets: [presetEnv({
        useBuiltIns: 'usage',
      })],
    },
    [ ENV_PROD ]: {
      plugins: [pluginJsxVue()],
      presets: [presetEnv({
        env: ENV_PROD,
        useBuiltIns: 'usage',
      })],
    },
    test: {
      presets: [getTestConfig()],
    },
  },
};
