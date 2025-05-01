const shared = {
  name: 'Button',
  description:
    'Use `s-button` when you want to provide users the ability to perform specific actions, like saving data.',
  thumbnail: 'button-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Button',
    },
  ],
  subCategory: 'Actions',
  related: [
    {
      type: 'component',
      name: 'Pressable',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/pressable',
    },
    {
      type: 'component',
      name: 'Link',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/link',
    },
  ],
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'inline',
        },
      ],
    },
  },
};

export default shared;
