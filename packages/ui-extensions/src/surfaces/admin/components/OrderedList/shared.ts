const shared = {
  name: 'OrderedList',
  description:
    '`s-ordered-list` displays a set of related text-only content beginning with a number.',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/ordered-list.png',
  isVisualComponent: true,
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'UnorderedList',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/unordered-list',
    },
    {
      type: 'component',
      name: 'Text',
      url: '/docs/api/admin-extensions/polaris-web-components/titles-and-text/text',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
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
