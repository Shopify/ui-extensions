import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateSpinner',
  description:
    'The `DateSpinner` component enables merchants to select a specific date using a spinner interface with scrollable columns for month, day, and year. Use it to provide compact date selection in constrained spaces.' +
    '\n\n`DateSpinner` offers an alternative to calendar-style pickers when space is limited or when users prefer scrolling through date values. The spinner interface allows merchants to select dates by scrolling through separate columns for month, day, and year, providing a compact and intuitive way to select dates in constrained layouts.',
  thumbnail: 'date-spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DateSpinner` component.',
      type: 'DateSpinner',
    },
    {
      title: 'Events',
      description:
        'The `DateSpinner` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'DateSpinnerEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'date-spinner-default.png',
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
    description: 'DateSpinner usage patterns',
    examples: [
      {
        description: 'Show and hide DateSpinner using button commands',
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
        description: 'Handle date selection events',
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
