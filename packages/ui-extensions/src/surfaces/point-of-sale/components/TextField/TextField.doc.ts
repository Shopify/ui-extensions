import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'The `TextField` component captures single-line text input. Use it to collect short, free-form information in forms and data entry workflows.' +
    '\n\nThe component supports various input configurations including placeholders, character limits, and validation. It includes built-in support for labels, helper text, and error states to guide merchants through data entry, ensuring accurate and efficient information capture across different retail scenarios.',
  thumbnail: 'text-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TextField` component.',
      type: 'TextField',
    },
    {
      title: 'Slots',
      description:
        'The `TextField` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TextFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The `TextField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TextFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'text-field-default.png',
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
    description: 'Advanced usage patterns for TextField component',
    examples: [
      {
        description:
          'Handle TextField events: onInput, onFocus, onBlur, and onChange.',
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
          'Add action buttons using the accessory slot. Only `s-button` and `s-clickable` are supported, with text content only',
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
      {
        description:
          'Common TextField props for validation, constraints, and user guidance.',
        codeblock: {
          title: 'Common props',
          tabs: [
            {
              code: './examples/common-props.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
