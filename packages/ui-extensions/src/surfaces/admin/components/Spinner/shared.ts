const shared = {
  name: 'Spinner',
  description:
    'Use `s-spinner` to let merchants know that content is being loaded. For loading states on buttons, use the loading prop on the Button component instead.',
  requires: '',
  thumbnail: 'spinner-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A loading indicator component.',
      type: 'Spinner',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/components/actions/button',
    },
  ],
};

export default shared;
