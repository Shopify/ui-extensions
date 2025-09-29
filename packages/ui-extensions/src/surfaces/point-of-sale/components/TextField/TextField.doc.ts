import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'Captures single-line text input from merchants. Use to collect short, free-form information.',
  thumbnail: 'text-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextField',
    },
    {
      title: 'Slots',
      description:
        'Learn more about using [slots](/docs/api/pos-ui-extensions/using-polaris-components#slots)',
      type: 'TextFieldSlots',
    },
    {
      title: 'Events',
      description:
        'Learn more about registering [events](/docs/api/pos-ui-extensions/using-polaris-components#events)',
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
