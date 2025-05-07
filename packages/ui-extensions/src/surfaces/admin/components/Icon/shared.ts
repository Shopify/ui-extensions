const shared = {
  name: 'Icon',
  description:
    'Use `s-icon` to render an icon from a predefined list. Choose the one that suits your needs.',
  thumbnail: 'icon.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Icon',
    },
  ],
  subCategory: 'Media',
  related: [
    {
      type: 'component',
      name: 'Image',
      url: '/docs/api/admin-extensions/polaris-web-components/media/image',
    },
  ],
  defaultExample: {
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
