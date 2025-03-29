const shared = {
  name: 'Clickable',
  description:
    'Use `s-clickable` to make elements interactive. This component provides consistent keyboard navigation and accessibility features for clickable elements.',
  requires: '',
  thumbnail: 'clickable-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A component that makes its children interactive.',
      type: 'Clickable',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/components/actions/button',
    },
    {
      type: 'component',
      name: 'Link',
      url: '/docs/api/admin-extensions/components/actions/link',
    },
  ],
};

export default shared;
