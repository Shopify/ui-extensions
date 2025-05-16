const shared = {
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/textfield.png',
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
  defaultExample: {
    image: 'text-field-default.png',
    codeblock: {
      title: 'Code',
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
