const shared = {
  name: 'TextField',
  description:
    'Use a text field to allow merchants to enter or edit text. Text fields provide a single-line input area for collecting string values from users.',
  thumbnail: 'textfield-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'TextField',
      description:
        'A text input field that allows users to enter and edit text.',
      type: 'TextField',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TextFieldSlots',
    },
  ],
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextArea',
      url: '/docs/api/admin-extensions/components/forms/textarea',
    },
    {
      type: 'component',
      name: 'EmailField',
      url: '/docs/api/admin-extensions/components/forms/emailfield',
    },
    {
      type: 'component',
      name: 'NumberField',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
  ],
  defaultExample: {
    image: 'text-field-default.png',
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
