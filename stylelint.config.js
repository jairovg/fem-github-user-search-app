const STYLELINT_EXTENDS = require('webpack-lib').stylelint.STYLELINT_EXTENDS;

module.exports = {
  extends: STYLELINT_EXTENDS,
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless'],
      },
    ],
  },
}
