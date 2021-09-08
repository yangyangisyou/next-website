module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'arrow-body-style': 0,
    'no-console': 0,
    'max-len': 0,
    'react/react-in-jsx-scope': 0,
    'no-underscore-dangle': 0,
    'no-nested-ternary': 0,
    'no-else-return': 0,
    'import/prefer-default-export': 0,
    'consistent-return': 0,
    'no-unused-vars': 0,
    camelcase: [0],
  },
};
