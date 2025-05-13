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
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ClickableEvents',
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
  ],
  defaultExample: {
    image: 'clickable-default.png',
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
