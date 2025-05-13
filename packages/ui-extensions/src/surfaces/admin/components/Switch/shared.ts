const shared = {
  name: 'Switch',
  description:
    'Use `s-switch` when you want to provide users with a clear selection option, such as toggling options on/off.',
  thumbnail: 'switch-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Switch',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'Checkbox',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/checkbox',
    },
    {
      type: 'component',
      name: 'Select',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/select',
    },
    {
      type: 'component',
      name: 'ChoiceList',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/choice-list',
    },
  ],
  defaultExample: {
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
