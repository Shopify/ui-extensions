const shared = {
  name: 'Heading',
  description:
    'Use `s-heading` to display a title, similar to the h1-h6 tags in HTML. `s-heading` will automatically update its design based on how deeply it is nested within `s-section` components.',
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
