import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'Captures email address input from merchants. Provides built-in email validation and appropriate keyboard layout.',
  thumbnail: 'email-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'EmailField',
    },
    {
      title: 'Slots',
      description:
        'Learn more about using [slots](/docs/api/pos-ui-extensions/using-polaris-components#slots)',
      type: 'EmailFieldSlots',
    },
    {
      title: 'Events',
      description:
        'Learn more about registering [events](/docs/api/pos-ui-extensions/using-polaris-components#events)',
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
