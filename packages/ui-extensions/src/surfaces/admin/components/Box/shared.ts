const shared = {
  name: 'Box',
  description: `
  Use \`s-box\` to build custom interfaces with your own design language. 

  #### Useful for:
  - Creating custom designs when you can't build what you need with the existing components.
  - Setting up specific stylings such as background colors, paddings, and borders.
  - Nesting with other components.
    `,   
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
