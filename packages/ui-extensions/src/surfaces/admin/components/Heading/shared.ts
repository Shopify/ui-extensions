const shared = {
  name: 'Heading',
  description:
    "The `s-heading` component renders hierarchical titles similar to HTML's `h1-h6` elements. Heading levels are automatically determined by parent `s-section` nesting depth starting from h2. Always prefer using the `heading` property on `s-section` and `s-banner` components before constructing custom layout with `s-heading`.",
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Heading',
    },
  ],
  subCategory: 'Titles and text',
  related: [
    {
      type: 'component',
      name: 'Text',
      url: '/docs/api/admin-extensions/components/titles-and-text/text',
    },
  ],
  defaultExample: {
    image: 'heading-default.png',
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
