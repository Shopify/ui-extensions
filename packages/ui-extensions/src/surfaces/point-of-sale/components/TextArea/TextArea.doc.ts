import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'Capture longer text content with a multi-line, resizable text input area.',
  thumbnail: 'text-area-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextArea',
    },
    {
      title: 'Slots',
      description:
        'Learn more about using [slots](/docs/api/pos-ui-extensions/using-polaris-components#slots)',
      type: 'TextAreaSlots',
    },
    {
      title: 'Events',
      description:
        'Learn more about registering [events](/docs/api/pos-ui-extensions/using-polaris-components#events)',
      type: 'TextAreaEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'text-area-default.png',
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
    description: 'TextArea usage patterns',
    examples: [
      {
        description: 'Configure visible rows and character limits',
        codeblock: {
          title: 'Rows configuration',
          tabs: [
            {
              code: './examples/rows-configuration.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description: 'Handle text area events',
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
