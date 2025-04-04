const shared = {
  name: 'Image',
  description:
    'Use `s-image` when you want to display an image. \n\n When using images or illustrations in your app, ensure that they add clarity and clearly direct merchants to the next step. Make sure to use high-resolution images to ensure a professional, high-quality experience.',
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
