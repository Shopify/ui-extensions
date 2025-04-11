const shared = {
  name: 'OrderedList',
  description:
    '`s-ordered-list` displays a set of related text-only content beginning with a number.',
  thumbnail: 'ordered-list-thumbnail.png',
  isVisualComponent: true,
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'UnorderedList',
      url: '/docs/api/admin-extensions/components/structure/unordered-list',
    },
    {
      type: 'component',
      name: 'Text',
      url: '/docs/api/admin-extensions/components/titles-and-text/text',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
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
