const shared = {
  name: 'UnorderedList',
  description:
    'UnorderedList displays a set of related text-only content beginning with a bullet.',
  requires: '',
  thumbnail: 'unordered-list-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'UnorderedList',
      description: 'A list of items that are unordered.',
      type: 'UnorderedList',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'OrderedList',
      url: '/docs/api/admin-extensions/components/structure/ordered-list',
    },
    {
      type: 'component',
      name: 'Text',
      url: '/docs/api/admin-extensions/components/titles-and-text/text',
    },
  ],
};

export default shared;
