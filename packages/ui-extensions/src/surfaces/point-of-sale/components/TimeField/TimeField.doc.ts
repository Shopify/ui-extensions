import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TimeField',
  description:
    'Captures time input from merchants. Provides a consistent interface for time selection, with proper validation.',
  thumbnail: 'time-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TimeField',
    },
    {
      title: 'Events',
      description:
        'Learn more about registering [events](/docs/api/pos-ui-extensions/using-polaris-components#events)',
      type: 'TimeFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'time-field-default.png',
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
    description: 'TimeField usage patterns',
    examples: [
      {
        description: 'Handle time input events',
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
