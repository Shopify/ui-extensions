const shared = {
  name: 'TextArea',
  description:
    'Use `s-text-area` when you need to collect longer text content from merchants. Text areas allow for multiple lines of text and automatically expand to fit the content.',
  requires: '',
  thumbnail: 'textarea-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A multi-line text input field.',
      type: 'TextArea',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
  ],
};

export default shared;
