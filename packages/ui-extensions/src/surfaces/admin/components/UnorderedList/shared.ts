const shared = {
  name: 'UnorderedList',
  description:
    'UnorderedList displays a set of related text-only content beginning with a bullet.',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/unordered-list.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'OrderedList',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/ordered-list',
    },
    {
      type: 'component',
      name: 'Text',
      url: '/docs/api/admin-extensions/polaris-web-components/titles-and-text/text',
    },
  ],
  defaultExample: {
    image: 'unordered-list-default.png',
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
