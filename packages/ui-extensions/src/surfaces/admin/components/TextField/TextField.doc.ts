import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/TextField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/textfield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Make expected input clear:** Users should immediately understand what to enter and in what format. Ambiguous labels and placeholders force users to guess, leading to validation errors and frustration.
- **Provide visual context:** Prefixes and suffixes help users understand the type of value expected and its format. Without context, users may not know whether they're entering a complete URL or just a subdomain, a full price or just the amount.
- **Set constraints that match requirements:** Define character limits and validation rules based on actual business needs, not arbitrary numbers. Communicate these constraints clearly so users know what's expected.
- **Give helpful feedback:** Show users whether their input is valid as they type, not just after they submit. When input is invalid, explain specifically what's wrong and how to fix it rather than showing generic error messages.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The \`maxLength\` attribute prevents typing beyond the limit, but users can paste text exceeding \`maxLength\`. Browsers handle this inconsistently. Always validate length server-side.
- Input types like \`type="email"\` and \`type="url"\` have basic built-in validation, but validation rules vary between browsers. Always implement server-side validation for critical data.
- The \`accessory\` slot supports only [\`Button\`](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button) and [\`Clickable\`](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/clickable) components with text content only. Other component types or complex layouts can't be used for field accessories.`,
    },
  ],
  definitions: [
    {
      title: 'TextField',
      description:
        'Configure the following properties on the `TextField` component.',
      type: 'TextField',
    },
    {
      title: 'Slots',
      description:
        'The `TextField` component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TextFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The `TextField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TextFieldEvents',
    },
  ],
  defaultExample: {
    image: 'text-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates a simple text input field for entering a store name with autocomplete turned off, providing a clean and straightforward input experience.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a text field enhanced with a search icon and a placeholder, creating a visually intuitive input for searching products.',
            codeblock: {
              title: 'With icon',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'html',
                },

                {
                  code: './examples/with-icon.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the importance of providing clear, actionable, and context-specific error messages that guide merchants toward correct input and understanding.',
            codeblock: {
              title: 'Specific error messages for merchant context',
              tabs: [
                {
                  code: './examples/specific-error-messages-for-merchant-context.html',
                  language: 'html',
                },

                {
                  code: './examples/specific-error-messages-for-merchant-context.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a text field marked as required, ensuring that users must provide input before form submission, with built-in validation support.',
            codeblock: {
              title: 'Required field with validation',
              tabs: [
                {
                  code: './examples/required-field-with-validation.html',
                  language: 'html',
                },

                {
                  code: './examples/required-field-with-validation.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description: 'Displays text field usage with prefix and suffix',
            codeblock: {
              title: 'With prefix and suffix',
              tabs: [
                {
                  code: './examples/with-prefix-and-suffix.html',
                  language: 'html',
                },

                {
                  code: './examples/with-prefix-and-suffix.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the flexibility of adding interactive elements like buttons to text fields, enabling immediate actions based on the entered input.',
            codeblock: {
              title: 'With accessory',
              tabs: [
                {
                  code: './examples/with-accessory.html',
                  language: 'html',
                },

                {
                  code: './examples/with-accessory.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
