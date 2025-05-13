const shared = {
  name: 'Badge',
  description:
    "Use `s-badge` to inform merchants of the status of an object or of an action that's been taken.",
  thumbnail: 'badge-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Badge',
    },
  ],
  subCategory: 'Titles and text',
  related: [
    {
      type: 'component',
      name: 'Banner',
      url: '/docs/api/admin-extensions/polaris-web-components/feedback/banner',
    },
    {
      type: 'component',
      name: 'Text',
      url: '/docs/api/admin-extensions/polaris-web-components/titles-and-text/text',
    },
  ],
  defaultExample: {
    image: 'badge-default.png',
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
