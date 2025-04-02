const shared = {
  name: 'Image',
  description: 'Use `s-image` when you want to display an image.',
  requires: '',
  thumbnail: 'image-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Image',
    },
  ],
  subCategory: 'Media',
  related: [
    {
      type: 'component',
      name: 'Icon',
      url: '/docs/api/admin-extensions/components/media/icon',
    },
  ],
  defaultExample: {
    image: 'image-default.png',
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
