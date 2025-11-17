import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'The `TextArea` component captures longer text content with a multi-line, resizable text input area. Use it to collect descriptions, notes, comments, or other extended text input in forms and data entry workflows.' +
    '\n\nThe component provides a multi-line text input area that accommodates longer content. It supports validation and multi-line formatting, making it ideal for capturing detailed information such as order notes, product descriptions, or customer feedback that requires more than single-line input.',
  thumbnail: 'text-area-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TextArea` component.',
      type: 'TextArea',
    },
    {
      title: 'Slots',
      description:
        'The `TextArea` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TextAreaSlots',
    },
    {
      title: 'Events',
      description:
        'The `TextArea` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
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
