import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PasswordField',
  description:
    'The PasswordField component provides a text input that masks the entered characters for secure data entry. Use it for passwords, API keys, secret tokens, or any other sensitive information.\n\nFor non-sensitive text input, use [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield).',
  requires: '',
  thumbnail: 'passwordfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the PasswordField component.',
      type: 'PasswordFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'passwordfield-default.png',
    description:
      'Store a warehouse API key without exposing it on screen. This example uses `PasswordField` to mask the input, with a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that saves the credentials.',
    codeblock: {
      title: 'Enter API credentials securely',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/PasswordField/examples/basic-passwordfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-passwordfield.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Enforce minimum length requirements on sensitive inputs using the `error` prop. This example validates that a webhook secret is at least 16 characters, displaying an inline error until the requirement is met to prevent merchants from saving weak secrets.',
        codeblock: {
          title: 'Validate secret length requirements',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/PasswordField/examples/passwordfield-validation.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/passwordfield-validation.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Combine `PasswordField` with [TextField](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) and [EmailField](/docs/api/admin-extensions/{API_VERSION}/components/forms/emailfield) to build a complete service connection form. This example collects an API endpoint, account email, and token in a single modal to connect a fulfillment provider.',
        codeblock: {
          title: 'Build a service connection form',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/PasswordField/examples/passwordfield-integration.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/passwordfield-integration.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Write a clear label:** The required \`label\` prop tells merchants what credential to enter. Use specific labels like "Password", "Current password", or "API secret key".
- **Pair with a confirmation field when creating passwords:** When merchants set a new password, provide a second PasswordField for confirmation and validate that both values match.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- PasswordField doesn't include a built-in "show/hide password" toggle. The entered text is always masked and can't be revealed.
- The component doesn't enforce password strength rules. You must validate the input yourself and use the \`error\` prop to communicate requirements.
- PasswordField doesn't support the \`suffix\` prop available on [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield). There is no built-in way to add a decoration or strength indicator inside the field.`,
    },
  ],
  related: [],
};

export default data;
