const shared = {
  name: 'EmailField',
  description:
    'Use `s-email-field` to allow merchants to input email addresses. This component provides built-in email validation and appropriate keyboard settings.',
  thumbnail: 'emailfield-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'EmailField',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/textfield',
    },
    {
      type: 'component',
      name: 'TextArea',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/textarea',
    },
  ],
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
