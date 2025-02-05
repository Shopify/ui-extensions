module.exports = {
  extends: [
    'plugin:@shopify/typescript',
    'plugin:@shopify/jest',
    'plugin:@shopify/prettier',
  ],
  ignorePatterns: [
    'build/',
    'examples/',
    'mdxExamples/',
    'node_modules/',
    'packages/*/build/',
    'packages/*/*.d.ts',
    'packages/*/*.js',
    '!packages/*/.eslintrc.js',
    'packages/*/*.mjs',
    'packages/*/*.node',
    'packages/*/*.esnext',
  ],
  rules: {
    // Codebase was originally written without some strict Shopify conventions
    'import/order': 'off',
    '@typescript-eslint/naming-convention': 'off',

    // This rule is just bad
    '@typescript-eslint/consistent-indexed-object-style': 'off',
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
