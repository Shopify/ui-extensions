const shared = {
  name: 'Grid',
  description:
    'Use `s-grid` to create responsive layouts with consistent spacing. Grid helps organize content into columns and rows with proper alignment and spacing.',
  requires: '',
  thumbnail: 'grid-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A component for creating grid-based layouts.',
      type: 'Grid',
    },
  ],
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Box',
      url: '/docs/api/admin-extensions/components/structure/box',
    },
    {
      type: 'component',
      name: 'Stack',
      url: '/docs/api/admin-extensions/components/structure/stack',
    },
  ],
  defaultExample: {
    image: 'grid-default.png',
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
