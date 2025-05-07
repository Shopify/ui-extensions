const shared = {
  name: 'Table',
  description:
    'Use `s-table` to organize and display data in a grid format. Tables help merchants view, analyze, and compare data.',
  thumbnail: 'table.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Table',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TableSlots',
    },
  ],
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/grid',
    },
  ],
  defaultExample: {
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'section',
        },
      ],
    },
  },
};

export default shared;
