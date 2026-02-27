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
      sectionContent: `- **Make expected input clear:** Merchants should immediately understand what to enter and in what format. Ambiguous labels and placeholders force merchants to guess, leading to validation errors and frustration.
- **Provide visual context:** Prefixes and suffixes help merchants understand the type of value expected and its format. Without context, merchants might not know whether they're entering a complete URL or just a subdomain, a full price or just the amount.
- **Set constraints that match requirements:** Define character limits and validation rules based on actual business needs, not arbitrary numbers. Communicate these constraints clearly so merchants know what's expected.
- **Give helpful feedback:** Show merchants whether their input is valid as they type, not just after they submit. When input is invalid, explain specifically what's wrong and how to fix it rather than showing generic error messages.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The \`maxLength\` attribute prevents typing beyond the limit, but in some edge cases, pasted or programmatically set content might exceed \`maxLength\`. Always validate length server-side.
- The \`accessory\` slot renders content at the end of the field. For best results, use [button](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button) or [clickable](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/clickable) components with text content.`,
    },
  ],
  definitions: [
    {
      title: 'TextField',
      description:
        'Configure the following properties on the text field component.',
      type: 'TextField',
    },
    {
      title: 'Slots',
      description:
        'The text field component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TextFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The text field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TextFieldEvents',
    },
  ],
  defaultExample: {
    image: 'textfield-default.png',
    description:
      'Add a single-line text input for collecting short-form information from merchants. This example shows a text field with a label, pre-filled value, and placeholder.',
    codeblock: {
      title: 'Add a basic text field',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Add an icon to a text field to help merchants quickly identify its purpose. This example shows a text field with a search icon and placeholder text.',
            codeblock: {
              title: 'Add an icon to a text field',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Provide specific error messages to tell merchants what went wrong and what correction is needed. This example shows three text fields contrasting a vague error, a specific validation error, and a business rule error.',
            codeblock: {
              title: 'Provide specific error messages for merchant context',
              tabs: [
                {
                  code: './examples/specific-error-messages-for-merchant-context.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Add a prefix or suffix to provide context for the expected value, such as a country code or card type. This example shows a phone number field with a prefix and a credit card field with a suffix.',
            codeblock: {
              title: 'Add a prefix and suffix',
              tabs: [
                {
                  code: './examples/with-prefix-and-suffix.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Place an interactive element like an icon or button inside a text field using the accessory slot. This example shows a text field with an info icon that triggers a tooltip.',
            codeblock: {
              title: 'Add an accessory to a text field',
              tabs: [
                {
                  code: './examples/with-accessory.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Prevent editing by making a text field read-only or fully disabled. This example shows a read-only store URL that merchants can copy and a disabled account ID.',
            codeblock: {
              title: 'Disable or make a text field read-only',
              tabs: [
                {
                  code: './examples/disabled-and-read-only.html',
                  language: 'preview',
                  title: '',
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
