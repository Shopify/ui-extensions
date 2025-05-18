const shared = {
  name: 'EmailField',
  description:
    'Use `s-email-field` to allow merchants to input email addresses. This component provides built-in email validation and appropriate keyboard settings.',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/emailfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'EmailField',
    },
  ],
  subCategory: 'Forms',
  related: [],
  defaultExample: {
    image: 'emailfield-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default shared;
