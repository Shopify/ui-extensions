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
