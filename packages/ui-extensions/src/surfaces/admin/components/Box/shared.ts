const shared = {
  name: 'Box',
  description:
    'The `s-box` component is an escape hatch for building custom user interfaces. You should only use `s-box` when you cannot build what you need with the existing components.',
  thumbnail: 'box-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Box',
    },
  ],
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Stack',
      url: '/docs/api/admin-extensions/components/structure/stack',
    },
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/components/structure/grid',
    },
    {
      type: 'component',
      name: 'Section',
      url: '/docs/api/admin-extensions/components/structure/section',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: '',
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
