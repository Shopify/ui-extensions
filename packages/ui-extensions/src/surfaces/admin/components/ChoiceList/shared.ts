const shared = {
  name: 'ChoiceList',
  description:
    'Use `s-choice-list` to present multiple options to merchants. Choice lists can present options with either radio buttons for single selection or checkboxes for multiple selection.',
  requires: '',
  thumbnail: 'choicelist-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A component for presenting a list of selectable options.',
      type: 'ChoiceList',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'Select',
      url: '/docs/api/admin-extensions/components/forms/select',
    },
    {
      type: 'component',
      name: 'Checkbox',
      url: '/docs/api/admin-extensions/components/forms/checkbox',
    },
  ],
  defaultExample: {
    image: 'choicelist-default.png',
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
