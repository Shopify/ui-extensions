const shared = {
  name: 'URLField',
  description: 'Use a URLField when you need to collect URLs from merchants.',
  requires: '',
  thumbnail: 'urlfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'URLField',
      description: 'A specialized text input field for URLs.',
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
      title: 'Default Example',
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
