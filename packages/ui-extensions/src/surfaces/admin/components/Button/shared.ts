const shared = {
  name: 'Button',
  description:
    'Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/button.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Button',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ButtonEvents',
    },
  ],
  subCategory: 'Actions',
  related: [
    {
      type: 'component',
      name: 'Clickable',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/clickable',
    },
    {
      type: 'component',
      name: 'Link',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/link',
    },
  ],
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'inline',
        },
      ],
    },
  },
};

export default shared;
