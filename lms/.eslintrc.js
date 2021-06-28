module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'linebreak-style': ['error', 'windows'],
    'require-jsdoc': 0,
    'new-cap': 0,
  },
};
