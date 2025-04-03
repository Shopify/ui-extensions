const shared = {
  name: 'MoneyField',
  description:
    'Use `s-money-field` when you need to collect monetary values from merchants. It provides appropriate formatting and validation for currency amounts.',
  requires: '',
  thumbnail: 'moneyfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A specialized input field for monetary values.',
      type: 'MoneyField',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'NumberField',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
  ],
  defaultExample: {
    image: 'moneyfield-default.png',
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
