module.exports = {
  // "extends": "airbnb"
  globals: {
    __dirname: false
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'flowtype'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    'prettier/prettier': 'error'
  }
}
