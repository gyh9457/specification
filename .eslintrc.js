module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
    'semi': ['error', 'always'],
  }
}
