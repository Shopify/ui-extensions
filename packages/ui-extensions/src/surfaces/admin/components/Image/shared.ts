const shared = {
  thumbnail: '/assets/templated-apis-screenshots/admin/components/image.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Adding illustrations and photos.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use high-resolution images to ensure a professional and high-quality experience.
- Use optimized images so your app loads as fast as possible.
- Use images intentionally, these should add clarity and lead users to the next step.`,
    },
  ],
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
