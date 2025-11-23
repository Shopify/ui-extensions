import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TimePicker',
  description:
    'The `TimePicker` component allows merchants to select a specific time using an interactive picker interface. Use it to provide visual time selection for improved user experience and reduced input errors.' +
    '\n\n`TimePicker` offers a more visual and touch-friendly alternative to text-based time input, making time selection faster and more accurate. The picker interface provides an intuitive way to select hours and minutes through an interactive interface.',
  thumbnail: 'time-spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TimePicker` component.',
      type: 'TimePicker',
    },
    {
      title: 'Events',
      description:
        'The `TimePicker` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TimePickerEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'time-spinner-default.png',
    description:
      'Enable visual time selection using a `TimePicker` component with an interactive picker interface. This example shows a basic time picker for selecting hours and minutes.',
    codeblock: {
      title: 'Select times with a time picker',
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
      'Learn how to control picker visibility and handle time selection events.',
    examples: [
      {
        description:
          'Control `TimePicker` visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the time picker, enabling custom trigger patterns for time selection workflows.',
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
          'Subscribe to time selection events to respond when merchants pick a time. This example shows how to handle `onChange` events to capture selected times, enabling validation, scheduling logic, or dynamic updates based on the chosen time.',
        codeblock: {
          title: 'Handle time selection events',
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
