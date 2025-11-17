import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description:
    'The `NumberField` component captures numeric input with built-in validation. Use it to collect quantity, price, or other numeric information with optional `stepper` controls.' +
    '\n\nThe component includes built-in number validation, optional min/max constraints, and step increments to ensure accurate numeric data entry. It supports various number formats including integers and decimals, with validation feedback to prevent entry errors during high-volume retail operations.',
  thumbnail: 'number-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `NumberField` component.',
      type: 'NumberField',
    },
    {
      title: 'Slots',
      description:
        'The `NumberField` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'NumberFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The `NumberField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'NumberFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'number-field-default.png',
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
    description: 'NumberField usage patterns',
    examples: [
      {
        description:
          'Use controls for increment/decrement buttons and set min/max constraints',
        codeblock: {
          title: 'Controls and constraints',
          tabs: [
            {
              code: './examples/controls-constraints.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Specify inputMode for decimal or numeric keyboard layouts',
        codeblock: {
          title: 'Input modes',
          tabs: [
            {
              code: './examples/input-mode.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
