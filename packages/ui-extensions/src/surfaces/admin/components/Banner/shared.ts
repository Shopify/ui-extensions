const shared = {
  name: 'Banner',
  description:
    'Use `s-banner` to communicate important status updates or indicate that there are important actions that users must take. \n\n You can use banners both as a standalone component on a page or inside of a `s-section`. Banners will automatically update their deisgn to match the context in which they are used.',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Banner',
    },
  ],
  subCategory: 'Feedback',
  related: [
    {
      type: 'component',
      name: 'Badge',
      url: '/docs/api/admin-extensions/components/feedback/badge',
    },
  ],
  defaultExample: {
    image: 'banner-default.png',
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
};

export default shared;
