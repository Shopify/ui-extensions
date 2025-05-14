const shared = {
  name: 'Link',
  description:
    '`s-link` is an interactive component that directs users to a specified URL. It even supports custom protocols.\n\n To link to a Shopify admin page, use `href="shopify://admin/orders"`. To link to an app page, use `href="app://orders"`.',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/link.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Link',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'LinkEvents',
    },
  ],
  subCategory: 'Actions',
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/button',
    },
  ],
  defaultExample: {
    image: 'link-default.png',
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
