const shared = {
  name: 'Divider',
  description: `
  Use \`s-divider\` to create a clear visual separation between different elements in your user interface.

  #### Useful for:
  - Separating elements inside sections.
  - Visually grouping related content in forms and lists.
  `,

  thumbnail: '/assets/templated-apis-screenshots/admin/components/divider.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Divider',
    },
  ],
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Section',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/section',
    },
    {
      type: 'component',
      name: 'Stack',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/stack',
    },
  ],
  defaultExample: {
    image: 'divider-default.png',
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
