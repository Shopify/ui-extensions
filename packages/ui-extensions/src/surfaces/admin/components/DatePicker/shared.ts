const shared = {
  name: 'DatePicker',
  description:
    'Use a date picker to allow merchants to select a date or a date range.',
  thumbnail: 'datepicker-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'DatePicker',
      description: '',
      type: 'DatePicker',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'DatePickerEvents',
    },
  ],
  subCategory: 'Forms',
  related: [],
  defaultExample: {
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
