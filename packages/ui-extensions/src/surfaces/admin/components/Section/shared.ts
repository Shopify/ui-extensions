const shared = {
  name: 'Section',
  description:
    "`s-section` is a structural component that allows thematic and logical grouping of content. You should use sections as the primary container for all of your app's content. Nest sections to progressively group information. \n\n Section's visual style is contextual and controlled by Shopify. In the admin, at the top level of nesting, sections render as cards. Nested further, they render as the appropriate container for related information within a card. The sections header property will automatically use the correct heading level for the section's content based on the level of nesting. \n\n Section provides default vertical white space to children, so using Stack and Grid are not necessary unless building a complex layout.",
  requires: '',
  thumbnail: 'section-thumbnail.png',
  isVisualComponent: true,
  type: '',
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
        },
      ],
    },
  },
};

export default shared;
