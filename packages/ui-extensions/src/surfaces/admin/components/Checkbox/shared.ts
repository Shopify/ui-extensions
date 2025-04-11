const shared = {
  name: 'Checkbox',
  description:
    'Use `s-checkbox` when you want to provide users with a clear selection option, such as for agreeing to terms and conditions or selecting multiple options from a list.',
  thumbnail: 'checkbox-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Checkbox',
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
      name: 'ChoiceList',
      url: '/docs/api/admin-extensions/components/forms/choice-list',
    },
  ],
  defaultExample: {
    image: 'checkbox-default.png',
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
