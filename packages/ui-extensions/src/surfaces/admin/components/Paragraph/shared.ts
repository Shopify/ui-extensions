const shared = {
  name: 'Paragraph',
  description:
    'Use `s-paragraph` to display a block of text similar to the `<p>` tag in HTML.',
  thumbnail: 'paragraph-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Paragraph',
    },
  ],
  subCategory: 'Titles and text',
  related: [
    {
      type: 'component',
      name: 'Heading',
      url: '/docs/api/admin-extensions/components/titles-and-text/heading',
    },
  ],
  defaultExample: {
    image: 'paragraph-default.png',
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
