import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description:
    'The `DatePicker` component allows merchants to select a specific date using a calendar-like picker interface. Use it to provide visual date selection with an intuitive calendar view for improved user experience.' +
    '\n\n`DatePicker` offers a calendar-based alternative to spinner-style pickers when visual calendar context is beneficial. The calendar interface allows merchants to see dates in context of the full month, making it easier to select dates relative to specific days of the week or to visualize date ranges within a month view.',
  thumbnail: 'date-picker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DatePicker` component.',
      type: 'DatePicker',
    },
    {
      title: 'Events',
      description:
        'The `DatePicker` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'DatePickerEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'date-picker-default.png',
    description:
      'Enable visual date selection using a `DatePicker` component with a calendar interface. This example shows a basic date picker with month view and date selection.',
    codeblock: {
      title: 'Select dates with a calendar picker',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
  examples: {
    description:
      'Learn how to control picker visibility and handle date selection events.',
    examples: [
      {
        description:
          'Control `DatePicker` visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the calendar picker, enabling custom trigger patterns for date selection workflows.',
        codeblock: {
          title: 'Control picker visibility',
          tabs: [
            {
              code: './examples/command-system.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Subscribe to date selection events to respond when merchants pick a date from the calendar. This example shows how to handle `onChange` events to capture selected dates, enabling validation, scheduling logic, or dynamic updates based on the chosen date.',
        codeblock: {
          title: 'Handle date selection events',
          tabs: [
            {
              code: './examples/event-handling.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
