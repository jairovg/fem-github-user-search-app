const { merge } = require('webpack-merge');
const { utils, styles, javascript } = require('webpack-lib');
const { build, src, index } = require('./webpack.constants').PATHS;

/**
 * Setup meta headers for the page
 */
const meta = {
  charset: 'UTF-8',
  description: 'GitHub user search app using the GitHub users API',
  viewport: 'width=device-width, initial-scale=1.0',
  'X-UA-Compatible': { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' }
};

module.exports = merge([
  {
    output: {
      path: build,
      filename: '[name].js'
    },
    resolve: {
      alias: {
        '~': src,
      },
      extensions: ['*', '.js', '.jsx'],
    },
    /**
      * Displays only errors to reduce the amount of output
      * values: 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
      */
    stats: 'errors-only',
  },
  utils.htmlPlugin({
    title: 'Frontend Mentor | GitHub user search app',
    meta,
    template: index,
  }),
  styles.stylelintPlugin({ files: '**/*.(s?(a|c)ss|vue)' }),
  javascript.eslintPlugin({ files: './src/**/*.{js,jsx,vue}' }),
  //javascript.loadVue(),
  javascript.loadJS(),
]);
