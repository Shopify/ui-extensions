import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Email field',
  description:
    'The email field component captures email address input. Use it to collect email information in forms, customer profiles, or contact workflows.' +
    "\n\nThe email field component doesn't perform automatic email validation. Implement your own validation logic, and use the `error` property to display validation results.",
  thumbnail: 'email-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the email field component.',
      type: 'EmailField',
    },
    {
      title: 'Slots',
      description:
        'The email field component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/app-ui/using-polaris-web-components#slots).',
      type: 'EmailFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The email field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'EmailFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'email-field-default.png',
    description:
      'Capture email address input using an email field component. This example shows a basic email field with a label for collecting email information.',
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
The \`accessory\` slot supports only [\`button\`](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/button) and [\`clickable\`](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/clickable) components—other component types can't be used in the accessory slot.
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
          'Add action buttons to the email field using the accessory slot for quick actions like clearing input or verifying email addresses. This example shows how to use [s-button](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/button) and [s-clickable](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/clickable) components in the accessory slot, providing inline functionality within the email input context.',
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
