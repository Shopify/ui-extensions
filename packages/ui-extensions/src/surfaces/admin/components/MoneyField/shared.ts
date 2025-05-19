const shared = {
  name: 'MoneyField',
  description:
    'Use `s-money-field` when you need to collect monetary values from merchants. It provides appropriate formatting and validation for currency amounts.',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/moneyfield.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'MoneyField',
    },
  ],
  subCategory: 'Forms',
  related: [],
  defaultExample: {
    image: 'moneyfield-default.png',
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
