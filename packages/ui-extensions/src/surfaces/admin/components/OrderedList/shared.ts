const shared = {
  name: 'OrderedList',
  description:
    '`s-ordered-list` displays a set of related text-only content beginning with a number.',
  requires: '',
  thumbnail: 'ordered-list-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A list of items that are ordered numerically.',
      type: 'OrderedList',
    },
  ],
  category: 'Components',
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
};

export default shared;
