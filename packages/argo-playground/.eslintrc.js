module.exports = {
  rules: {
    'react/no-array-index-key': 'off',
    '@shopify/images-no-direct-imports': 'off',
    '@shopify/jsx-no-hardcoded-content': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'off',

    // TODO: Re-enable when tree-shaking works
    '@shopify/strict-component-boundaries': 'off',

    // TODO: Re-enable after ticket https://github.com/Shopify/app-extension-libs/issues/805
    'react/style-prop-object': 'off',
  },
};
