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
    description:
      'Capture single-line text input using a `TextField` component with validation support. This example shows a basic text field with label and placeholder text.',
    codeblock: {
      title: 'Capture text input with a text field',
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
      'Learn how to add accessory buttons, configure validation properties, and handle events.',
    examples: [
      {
        description:
          'Add action buttons to the text field using the accessory slot for quick actions like clearing text or submitting input. This example shows how to use `s-button` and `s-clickable` components with text content in the accessory slot, enabling inline actions without leaving the input context.',
        codeblock: {
          title: 'Add accessory buttons',
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
          'Configure common `TextField` properties for validation, character limits, and user guidance. This example demonstrates using props like `maxlength`, `required`, `helperText`, and `error` to create a well-guided input experience with proper validation feedback.',
        codeblock: {
          title: 'Configure validation and guidance',
          tabs: [
            {
              code: './examples/common-props.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Subscribe to `TextField` events including `onInput`, `onFocus`, `onBlur`, and `onChange` to respond to user interactions. This example shows how to handle different input events for real-time validation, autosave functionality, or dynamic form behavior.',
        codeblock: {
          title: 'Handle input events',
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
