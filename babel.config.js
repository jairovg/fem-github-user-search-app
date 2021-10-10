const { getTestConfig, pluginJsxVue, presetEnv } = require('webpack-lib').babel;
const { ENV_DEV } = require('webpack-lib').constants;

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
    test: {
      presets: [getTestConfig()],
    },
  },
};
