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
  ],
  rules: {
    // Codebase was originally written without some strict Shopify conventions
    'import/order': 'off',
    '@typescript-eslint/naming-convention': 'off',

    // This rule is just bad
    '@typescript-eslint/consistent-indexed-object-style': 'off',

    // // Shopify configuration messes up on comments at the start of blocks
    // 'lines-around-comment': 'off',

    // // Only a problem in extremely outdated browsers ("IE 8 and earlier")
    // 'no-catch-shadow': 'off',

    // // This rule is buggy with optional chaining
    // 'babel/no-unused-expressions': 'off',
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
  ],
};
