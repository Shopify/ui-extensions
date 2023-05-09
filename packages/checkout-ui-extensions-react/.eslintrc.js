module.exports = {
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-process-env': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    'no-warning-comments': 'error',
  },
  overrides: [
    {
      files: ['*.example.*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
