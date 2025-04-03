const shared = {
  name: 'Link',
  description:
    '`s-link` is an interactive component that directs users to a specified URL. It even supports custom protocols.',
  requires: '',
  thumbnail: 'link-thumbnail.png',
  isVisualComponent: true,
  type: '',
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
      title: 'Default Example',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description: 'Link to an app page',
        image: 'link-default.png',
        codeblock: {
          tabs: [
            {
              code: './examples/app.html',
              language: 'html',
            },
          ],
          title: 'App Link',
        },
      },
      {
        description: 'Link to a Shopify admin page',
        image: 'shopify-section-link.png',
        codeblock: {
          tabs: [
            {
              code: './examples/shopify-section.html',
              language: 'html',
            },
          ],
          title: 'Shopify Section Link',
        },
      },
    ],
  },
};

export default shared;
