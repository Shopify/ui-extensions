const shared = {
  name: 'Table',
  description: `
  Use \`s-table\` to organize and display data in a grid format. Tables help merchants view, analyze, and compare data.

  #### With data filters
  Use the \`filters\` slot to add data filter controls to the table. The filter controls will be displayed at the top of the table. For example, the \`s-search-field\` component can be used to filter the data by a specific keyword.
  `,
  thumbnail: 'table-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Table',
    },
  ],
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/components/structure/grid',
    },
    {
      type: 'component',
      name: 'SearchField',
      url: '/docs/api/admin-extensions/components/forms/search-field',
    },
  ],
  defaultExample: {
    image: 'table-default.png',
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
