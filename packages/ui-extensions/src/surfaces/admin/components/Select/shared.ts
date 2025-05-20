const shared = {
  name: 'Select',
  description:
    '`s-select` lets merchants choose one option from an options menu. Consider `s-select` when you have 4 or more options, to avoid cluttering the interface.',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/select.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Select',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'SelectEvents',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'ChoiceList',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/choice-list',
    },
    {
      type: 'component',
      name: 'Checkbox',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/checkbox',
    },
  ],
  defaultExample: {
    image: 'select-default.png',
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
