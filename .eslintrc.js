module.exports = {
  extends: [
    'plugin:@shopify/typescript',
    'plugin:@shopify/jest',
    'plugin:@shopify/prettier',
  ],
  ignorePatterns: [
    'build/',
    'examples/',
    'node_modules/',
    'packages/*/build/',
    'packages/*/*.d.ts',
    'packages/*/*.js',
    '!packages/*/.eslintrc.js',
    'packages/*/*.mjs',
    'packages/*/*.node',
    'packages/*/*.esnext',
    'packages/ui-extensions/src/surfaces/checkout/**/*.d.ts',
    'packages/ui-extensions/src/surfaces/checkout/preact/tests/',
    'packages/ui-extensions/src/surfaces/point-of-sale/**/*.d.ts',
  ],
  rules: {
    // Codebase was originally written without some strict Shopify conventions
    'import/order': 'off',
    'line-comment-position': 'off',
    '@typescript-eslint/naming-convention': 'off',

    // This rule is just bad
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    'eslint-comments/no-unused-disables': 'off',
  },
  overrides: [
    {
      files: ['loom.config.ts', 'config/loom/**/*'],
      rules: {
        // Doesn’t understand that loom dependencies come from the root package.json
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/.eslintrc.js'],
      env: {node: true},
    },
    {
      files: ['*.stories.*', '*.test.*', '*.example.*'],
      rules: {
        '@shopify/jsx-no-hardcoded-content': 'off',
      },
    },
    {
      files: [
        'packages/ui-extensions/docs/surfaces/**/*.example.*',
        'packages/ui-extensions/src/surfaces/**/*.example.*',
      ],
      rules: {
        'no-console': 'off',
        '@shopify/checkout-web/custom-error-subclassing': 'off',
        'import/no-extraneous-dependencies': 'off',
        'promise/catch-or-return': 'off',
      },
    },
  ],
};
