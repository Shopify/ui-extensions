// See the root .eslintrc for more overrides.
module.exports = {
  rules: {
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    '@shopify/jsx-no-hardcoded-content': 'off',
    '@shopify/checkout-web/custom-error-subclassing': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 50,
      },
    ],
    'promise/catch-or-return': 'off',
  },
};
