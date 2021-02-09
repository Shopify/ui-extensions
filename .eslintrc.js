module.exports = {
  extends: ['plugin:@sewing-kit/typescript', 'plugin:@sewing-kit/prettier'],
  ignorePatterns: [
    'node_modules/',
    '**/build/',
    'packages/*/*.d.ts',
    'packages/*/*.js',
    '!packages/*/.eslintrc.js',
    'packages/*/*.mjs',
    'packages/*/*.node',
    'packages/*/*.esnext',
    'examples/',
  ],
  rules: {
    // Conflicts with prettier rule
    'lines-around-comment': 'off',
    // These are all removed in a resolution version of the typescript rules we have,
    // but are enabled in the shared config written against an older version.
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/class-name-casing': 'off',
  },
  overrides: [
    {
      files: ['sewing-kit.config.ts', 'config/sewing-kit/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
