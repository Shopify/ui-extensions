const shared = {
  name: 'SearchField',
  description:
    'Use a search field to allow merchants to search for a specific item or search term. Search fields provide a single-line input area for collecting string values from users.',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/searchfield.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  definitions: [
    {
      title: 'SearchField',
      description:
        'A search input field that allows users to enter a search term.',
      type: 'SearchField',
    },
  ],
  subCategory: 'Forms',
  related: [],
  defaultExample: {
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
