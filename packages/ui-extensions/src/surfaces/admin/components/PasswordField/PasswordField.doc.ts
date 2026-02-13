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
    codeblock: {
      title: 'Simple PasswordField example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/PasswordField/examples/basic-passwordfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-passwordfield.example.ts',
          language: 'js',
        },
      ],
    },
  },

  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Always provide a clear label:** Use labels like "Password", "Current password", or "API secret key" so merchants know exactly what to enter.
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
