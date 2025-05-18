const shared = {
  name: 'ChoiceList',
  description:
    'Use `s-choice-list` to present multiple options to merchants. Choice lists can present options with either radio buttons for single selection or checkboxes for multiple selection.',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/choicelist.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ChoiceList',
    },
  ],
  subCategory: 'Forms',
  related: [],
  defaultExample: {
    image: 'choicelist-default.png',
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
