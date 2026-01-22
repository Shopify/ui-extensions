import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'The `TextField` component captures single-line text input. Use it to collect short, free-form information like names, titles, or identifiers.' +
<<<<<<< HEAD
    '\n\nThe component supports various input configurations including placeholders, character limits, and validation. For multi-line text entry, use the [`TextArea`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/textarea) component.',
=======
    '\n\nThe component supports various input configurations including placeholders, character limits, and validation. For multi-line text entry, use the [`TextArea`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/textarea) component.',
>>>>>>> 2025-10
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
<<<<<<< HEAD
- **Use for single-line text input:** Choose \`TextField\` for short values like names, titles, or identifiers. For multi-line content, use [\`TextArea\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/textarea).
=======
- **Use for single-line text input:** Choose \`TextField\` for short values like names, titles, or identifiers. For multi-line content, use [\`TextArea\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/textarea).
>>>>>>> 2025-10
- **Show character limit feedback:** When approaching \`maxLength\`, display remaining characters in the \`details\` text.
- **Write descriptive labels:** Use specific labels like "Product Name" or "Reference Code" rather than generic terms.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
<<<<<<< HEAD
The \`accessory\` slot supports only [\`Button\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/button) and [\`Clickable\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/clickable) components with text content only—other component types or complex layouts can't be used for field accessories.
=======
The \`accessory\` slot supports only [\`Button\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/actions/button) and [\`Clickable\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/actions/clickable) components with text content only—other component types or complex layouts can't be used for field accessories.
>>>>>>> 2025-10
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
<<<<<<< HEAD
          'Add action buttons to the text field using the accessory slot for quick actions like clearing text or submitting input. This example shows how to use [`s-button`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/button) and [`s-clickable`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/clickable) components with text content in the accessory slot, enabling inline actions without leaving the input context.',
=======
          'Add action buttons to the text field using the accessory slot for quick actions like clearing text or submitting input. This example shows how to use [`s-button`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/actions/button) and [`s-clickable`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/actions/clickable) components with text content in the accessory slot, enabling inline actions without leaving the input context.',
>>>>>>> 2025-10
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
