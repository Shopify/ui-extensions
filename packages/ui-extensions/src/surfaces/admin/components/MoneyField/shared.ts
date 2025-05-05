const shared = {
  name: 'MoneyField',
  description:
    'Use `s-money-field` when you need to collect monetary values from merchants. It provides appropriate formatting and validation for currency amounts.',
  thumbnail: 'moneyfield-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'MoneyField',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'NumberField',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/numberfield',
    },
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/textfield',
    },
    {
      type: 'information',
      name: 'Event handling',
      url: '/docs/api/admin-extensions/2025-10-rc#handling-events',
    },
  ],
  defaultExample: {
    image: 'moneyfield-default.png',
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
