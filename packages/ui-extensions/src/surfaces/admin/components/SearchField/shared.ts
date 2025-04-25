const shared = {
  name: 'SearchField',
  description:
    'Use a search field to allow merchants to search for a specific item or search term. Search fields provide a single-line input area for collecting string values from users.',
  thumbnail: 'searchfield-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'SearchField',
      description:
        'A search input field that allows users to enter a search term.',
      type: 'SearchField',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'EmailField',
      url: '/docs/api/admin-extensions/components/forms/emailfield',
    },
    {
      type: 'component',
      name: 'NumberField',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
  ],
  defaultExample: {
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
