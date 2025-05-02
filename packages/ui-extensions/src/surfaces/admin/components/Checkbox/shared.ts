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
      name: 'Switch',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/switch',
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
    image: 'checkbox-default.png',
    codeblock: {
      title: '',
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
