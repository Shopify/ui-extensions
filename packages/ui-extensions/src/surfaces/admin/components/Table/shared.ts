const shared = {
  name: 'Table',
  description:
    'Use `s-table` to organize and display data in a grid format. Tables help merchants view, analyze, and compare data.',
  requires: '',
  thumbnail: 'table-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A component for displaying data in rows and columns.',
      type: 'Table',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/components/structure/grid',
    },
  ],
};

export default shared;
