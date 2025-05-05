const shared = {
  name: 'TextArea',
  description:
    'Use `s-text-area` when you need to collect longer text content from merchants. Text areas allow for multiple lines of text and automatically expand to fit the content.',
  thumbnail: 'textarea-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextArea',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/textfield',
    },
    {
      type: 'information',
      name: 'Event handling',
      url: '/docs/api/admin-extensions/2025-10-rc#handling-events',
    },
  ],
  defaultExample: {
    image: 'textarea-default.png',
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
