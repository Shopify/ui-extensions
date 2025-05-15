const shared = {
  name: 'Box',
  description:
    'A generic container that provides a flexible alternative for custom designs not achievable with existing components. Use it to apply styling such as backgrounds, padding, or borders, or to nest and group other components. The contents of Box always maintain their natural size, making it especially useful within layout components that would otherwise stretch their children.',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/box.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Creating custom designs when you can't build what you need with the existing components.
  - Setting up specific stylings such as background colors, paddings, and borders.
  - Nesting with other components.`,
    },
  ],
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
      url: '/docs/api/admin-extensions/polaris-web-components/structure/stack',
    },
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/grid',
    },
    {
      type: 'component',
      name: 'Section',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/section',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
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
