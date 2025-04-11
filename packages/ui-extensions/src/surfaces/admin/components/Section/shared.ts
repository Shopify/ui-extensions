const shared = {
  name: 'Section',
  description:
    "The `s-section` component organizes your content into separate blocks. At the top level it looks like a card, and when nested inside another `s-section` it displays as a related content area. It automatically handles `s-heading` levels based on nesting.\n\nThe `s-section` component adds spacing between children, so you don't need to use `s-stack` or `s-grid` for basic layouts.",
  thumbnail: 'section-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Section',
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
    {
      type: 'component',
      name: 'Heading',
      url: '/docs/api/admin-extensions/components/titles-and-text/heading',
    },
  ],
  defaultExample: {
    image: 'section-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'page',
        },
      ],
    },
  },
};

export default shared;
