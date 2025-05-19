const shared = {
  name: 'NumberField',
  description:
    'Use `s-number-field` when you need to collect numerical input from merchants. It provides appropriate keyboard settings and validation for numerical values.',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/numberfield.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'NumberField',
    },
  ],
  subCategory: 'Forms',
  related: [],
  defaultExample: {
    image: 'numberfield-default.png',
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
