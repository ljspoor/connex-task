module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-unused-vars': 'error',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-return': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
  },
};
