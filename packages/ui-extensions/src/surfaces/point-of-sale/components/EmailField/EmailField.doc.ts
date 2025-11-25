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
    description:
      'Capture email address input using an `EmailField` component with built-in email validation. This example shows a basic email field with label and automatic format validation.',
    codeblock: {
      title: 'Capture email addresses with an email field',
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
- **Write descriptive labels:** Use specific labels like "Customer Email" or "Receipt Email Address" rather than generic "Email."
- **Provide context in details:** Use \`details\` for additional context like "Required for digital receipts" or "We'll send order updates to this address."
- **Write actionable error messages:** Provide clear validation messages like "Please enter a valid email address" that help users correct their input.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`EmailField\` provides the input interface but doesn't perform automatic email validation—you must implement validation logic and use the \`error\` property to display validation results.
- The \`required\` property adds semantic meaning only—it doesn't trigger automatic error display, so you must manually check for empty values and set errors accordingly.
- The \`accessory\` slot supports only \`Button\` and \`Clickable\` components—other component types can't be used in the accessory slot.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to add accessory buttons and handle email input events.',
    examples: [
      {
        description:
          'Add action buttons to the email field using the accessory slot for quick actions like clearing input or verifying email addresses. This example shows how to use `s-button` and `s-clickable` components in the accessory slot, providing inline functionality within the email input context.',
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
          'Subscribe to email input events to respond when merchants enter email addresses. This example demonstrates handling `onChange`, `onInput`, `onFocus`, and `onBlur` events for real-time email validation, duplicate checking, or autosave functionality.',
        codeblock: {
          title: 'Handle email input events',
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
