module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeaturers: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  pluigns: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
};
