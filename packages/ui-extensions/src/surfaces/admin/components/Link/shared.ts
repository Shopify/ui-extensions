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
  category: 'Components',
  subCategory: 'Actions',
  examples: {
    description: '',
    examples: [
      {
        description: 'Link to an app page',
        image: 'link-default.png',
        codeblock: {
          tabs: [
            {
              title: 'JSX',
              code: './examples/app.html',
              language: 'jsx',
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
              title: 'JSX',
              code: './examples/shopify-section.html',
              language: 'jsx',
            },
          ],
          title: 'Shopify Section Link',
        },
      },
    ],
  },
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/components/actions/button',
    },
  ],
};

export default shared;
