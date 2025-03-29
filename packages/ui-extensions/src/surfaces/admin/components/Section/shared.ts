const shared = {
  name: 'Section',
  description:
    '`s-section` is a structural component that allows thematic grouping of content. Its visual style is contextual and controlled by Shopify, so a `Section` may look different depending on the component it is nested inside.\n\n`Section` also automatically increases the heading level for its content to ensure a semantically correct heading structure in the document. To further increase the heading level inside the `Section`, consider nesting new `Section`s.',
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
  category: 'Components',
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
};

export default shared;
