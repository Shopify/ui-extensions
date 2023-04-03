module.exports = {
  rules: {
    'react/react-in-jsx-scope': 'off',
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
