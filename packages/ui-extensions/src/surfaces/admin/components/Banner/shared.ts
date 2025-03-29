const shared = {
  name: 'Banner',
  description:
    "Use `s-banner` to communicate important messages to merchants. They are designed to be noticeable but not disruptive to the merchant's workflow.",
  requires: '',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A component for displaying prominent messages or alerts.',
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
};

export default shared;
