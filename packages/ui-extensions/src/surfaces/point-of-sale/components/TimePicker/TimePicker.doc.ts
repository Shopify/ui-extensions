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
    codeblock: {
      title: 'Code',
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
    description: 'TimePicker usage patterns',
    examples: [
      {
        description: 'Show and hide TimePicker using button commands',
        codeblock: {
          title: 'Command system',
          tabs: [
            {
              code: './examples/command-system.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description: 'Handle time selection events',
        codeblock: {
          title: 'Event handling',
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
