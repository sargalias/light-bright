module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-prettier/recommended',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-declaration-use-variable'],
  rules: {
    'at-rule-empty-line-before': 'always',
    'sh-waqar/declaration-use-variable': [['color', 'background-color']],
  },
};
