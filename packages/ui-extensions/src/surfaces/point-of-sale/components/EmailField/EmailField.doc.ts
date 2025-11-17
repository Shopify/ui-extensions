import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'The `EmailField` component captures email address input from customers with built-in validation. Use it to collect email information in forms, customer profiles, or contact workflows.' +
    '\n\nThe component includes built-in email format validation using standard email patterns to ensure data quality. It provides real-time feedback on invalid entries and supports features like autocomplete and keyboard optimization for email input, helping merchants quickly capture valid customer contact information during checkout or registration workflows.' +
    '\n\n`EmailField` components integrate with browser autocomplete features to speed up email entry by suggesting previously used addresses, significantly reducing typing time during customer registration workflows.',
  thumbnail: 'email-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `EmailField` component.',
      type: 'EmailField',
    },
    {
      title: 'Slots',
      description:
        'The `EmailField` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'EmailFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The `EmailField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'EmailFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'email-field-default.png',
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
    description: 'EmailField usage patterns',
    examples: [
      {
        description: 'Handle email input events',
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
      {
        description:
          'Add action buttons using the accessory slot. Only s-button and s-clickable are supported',
        codeblock: {
          title: 'Accessory slot',
          tabs: [
            {
              code: './examples/accessory-slot.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
