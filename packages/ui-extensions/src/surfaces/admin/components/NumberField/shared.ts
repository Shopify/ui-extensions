const shared = {
  name: 'NumberField',
  description:
    'Use `s-number-field` when you need to collect numerical input from merchants. It provides appropriate keyboard settings and validation for numerical values.',
  thumbnail: 'numberfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'NumberField',
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
      name: 'MoneyField',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/moneyfield',
    },
  ],
  defaultExample: {
    codeblock: {
      title: '',
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
