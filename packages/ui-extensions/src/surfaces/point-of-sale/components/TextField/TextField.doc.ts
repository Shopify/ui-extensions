import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text field',
  description:
    'The text field component captures single-line text input. Use it to collect short, free-form information like names, titles, or identifiers.' +
    '\n\nThe component supports various input configurations including placeholders, character limits, and validation. For multi-line text entry, use the [text area](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/forms/text-area) component.',
  thumbnail: 'text-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the text field component.',
      type: 'TextField',
    },
    {
      title: 'Slots',
      description:
        'The text field component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TextFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The text field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TextFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'text-field-default.png',
    description:
      'Capture single-line text input using a text field component with validation support. This example shows a basic text field with label and placeholder text.',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use for single-line text input:** Choose text field for short values like names, titles, or identifiers. For multi-line content, use [text area](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/forms/text-area).
- **Show character limit feedback:** When approaching \`maxLength\`, display remaining characters in the \`details\` text.
- **Write descriptive labels:** Use specific labels like "Product Name" or "Reference Code" rather than generic terms.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
The \`accessory\` slot supports only [button](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/button) and [clickable](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/clickable) components with text content only—other component types or complex layouts can't be used for field accessories.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to add accessory buttons, configure validation properties, and handle events.',
    examples: [
      {
        description:
          'Add action buttons to the text field using the accessory slot for quick actions like clearing text or submitting input. This example shows how to use [s-button](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/button) and [s-clickable](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/clickable) components with text content in the accessory slot, enabling inline actions without leaving the input context.',
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
          'Configure common text field properties for validation, character limits, and user guidance. This example demonstrates using props like `maxlength`, `required`, `helperText`, and `error` to create a well-guided input experience with proper validation feedback.',
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
          'Subscribe to text field events including `onInput`, `onFocus`, `onBlur`, and `onChange` to respond to user interactions. This example shows how to handle different input events for real-time validation, autosave functionality, or dynamic form behavior.',
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
