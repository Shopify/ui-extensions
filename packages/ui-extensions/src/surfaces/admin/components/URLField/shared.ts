const shared = {
  name: 'URLField',
  description: 'Use a URLField when you need to collect URLs from merchants.',
  thumbnail: 'urlfield-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'URLField',
      description: '',
      type: 'URLField',
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
      name: 'EmailField',
      url: '/docs/api/admin-extensions/components/forms/emailfield',
    },
  ],
  defaultExample: {
    image: 'urlfield-default.png',
    codeblock: {
      title: '',
      tabs: [
        {
          title: 'HTML',
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default shared;
