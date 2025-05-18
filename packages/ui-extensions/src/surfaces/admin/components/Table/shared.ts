const shared = {
  name: 'Table',
  description:
    'Use `s-table` to organize and display data in a tabular format. Tables help merchants view, analyze, and compare data. By default the `s-table` renders as a list on mobile devices and a table on desktop devices.',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/table.png',
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
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'TableEvents',
    },
  ],
  subCategory: 'Structure',
  related: [],
  defaultExample: {
    image: 'table-default.png',
    codeblock: {
      title: 'Code',
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
