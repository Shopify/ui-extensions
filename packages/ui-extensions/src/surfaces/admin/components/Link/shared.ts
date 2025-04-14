const shared = {
  name: 'Link',
  description:
    '`s-link` is an interactive component that directs users to a specified URL. It even supports custom protocols.\n\n To link to a Shopify admin page, use `href="shopify://admin/orders"`. To link to an app page, use `href="app://orders"`.',
  thumbnail: 'link-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Link',
    },
  ],
  subCategory: 'Actions',
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/components/actions/button',
    },
  ],
  defaultExample: {
    image: 'link-default.png',
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
