const shared = {
  name: 'Image',
  description: `
  Use \`s-image\` to display images in your app.

  #### Useful for:
  - Adding illustrations and photos.

  #### Best practices
  - Use high-resolution images to ensure a professional and high-quality experience.
  - Use optimized images so your app loads as fast as possible.
  - Use images intentionally, these should add clarity and lead users to the next step.

  `,
  thumbnail: 'image-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Image',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ImageEvents',
    },
  ],
  subCategory: 'Media',
  related: [
    {
      type: 'component',
      name: 'Icon',
      url: '/docs/api/admin-extensions/polaris-web-components/media/icon',
    },
  ],
  defaultExample: {
    image: 'image-default.png',
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
