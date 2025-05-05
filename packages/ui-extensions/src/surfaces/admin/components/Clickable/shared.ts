const shared = {
  name: 'Clickable',
  description:
    'The `s-clickable` component is an escape hatch for when `s-button` and `s-link` are not sufficient to create an interactive element.',
  thumbnail: 'clickable-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Clickable',
    },
  ],
  subCategory: 'Actions',
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/button',
    },
    {
      type: 'component',
      name: 'Link',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/link',
    },
    {
      type: 'information',
      name: 'Event handling',
      url: '/docs/api/admin-extensions/2025-10-rc#handling-events',
    },
  ],
  defaultExample: {
    image: 'clickable-default.png',
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
