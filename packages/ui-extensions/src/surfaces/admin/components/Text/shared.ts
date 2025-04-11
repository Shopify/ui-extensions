const shared = {
  name: 'Text',
  description:
    'The `s-text` component is used for inline text styling, similar to HTML `span` elements, not for paragraph-level content. Use it to apply different visual tones and text styles to specific words or phrases within a `s-paragraph`, such as a `strong` type or `critical` tone.',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Text',
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
    image: 'text-default.png',
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
