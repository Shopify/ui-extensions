const shared = {
  name: 'Select',
  description:
    '`s-select` lets merchants choose one option from an options menu. Consider `s-select` when you have 4 or more options, to avoid cluttering the interface.',
  thumbnail: 'select-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Select',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'ChoiceList',
      url: '/docs/api/admin-extensions/components/forms/choice-list',
    },
    {
      type: 'component',
      name: 'Checkbox',
      url: '/docs/api/admin-extensions/components/forms/checkbox',
    },
  ],
  defaultExample: {
    image: 'select-default.png',
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
