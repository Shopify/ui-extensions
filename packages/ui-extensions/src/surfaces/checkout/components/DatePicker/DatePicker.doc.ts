import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/DatePicker';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'date-picker-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DatePickerElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'DatePickerElementEvents',
    },
  ],
  defaultExample: {
    image: 'date-picker-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-date-picker.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Grey out past dates and specific days of the week on the calendar. This example shows a date picker with `disallow="past"` and `disallowDays` excluding Sundays.',
        codeblock: {
          title: 'Restrict selectable calendar dates',
          tabs: [
            {
              code: './examples/date-picker-restricted.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
