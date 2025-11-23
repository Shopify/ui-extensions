import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'The `DateField` component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.' +
    '\n\n`DateField` components support both manual text entry and picker selection, giving merchants flexibility to choose their preferred input method based on personal preference and specific date entry scenarios.' +
    '\n\nFor visual calendar-based selection, consider `DatePicker`. For space-constrained layouts with scrolling date selection, use `DateSpinner`.',
  thumbnail: 'date-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DateField` component.',
      type: 'DateField',
    },
    {
      title: 'Events',
      description:
        'The `DateField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'DateFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'date-field-default.png',
    description:
      'Capture date input using a `DateField` component with built-in validation and picker integration. This example shows a basic date field with label and placeholder text.',
    codeblock: {
      title: 'Capture date input with a date field',
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
      'Learn how to handle date selection events and validate date input.',
    examples: [
      {
        description:
          'Subscribe to date input events to respond when merchants select or enter dates. This example shows how to handle `onChange` events to capture date selections, enabling real-time validation, date range checks, or dynamic scheduling behavior based on merchant input.',
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
