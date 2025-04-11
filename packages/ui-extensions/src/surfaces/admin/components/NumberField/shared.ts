const shared = {
  name: 'NumberField',
  description:
    'Use `s-number-field` when you need to collect numerical input from merchants. It provides appropriate keyboard settings and validation for numerical values.',
  thumbnail: 'numberfield-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: 'A specialized text input field for numerical values.',
      type: 'NumberField',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'MoneyField',
      url: '/docs/api/admin-extensions/components/forms/moneyfield',
    },
  ],
  defaultExample: {
    image: 'numberfield-default.png',
    codeblock: {
      title: 'Default Example',
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
