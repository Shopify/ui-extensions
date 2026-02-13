import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'The EmailField component provides a text input optimized for email addresses. It displays an email-appropriate virtual keyboard on mobile devices and supports email-specific autocomplete hints.\n\nFor general text input, use [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield).',
  requires: '',
  thumbnail: 'emailfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the EmailField component.',
      type: 'EmailFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'emailfield-default.png',
    codeblock: {
      title: 'Simple EmailField example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/EmailField/examples/basic-EmailField.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-EmailField.example.ts',
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
      sectionContent: `- **Use EmailField instead of TextField for email input:** EmailField triggers an email-optimized keyboard on mobile devices and supports email-specific autocomplete, reducing input friction.
- **Validate on blur, not on every keystroke:** Use the \`onBlur\` callback to trigger validation after the merchant finishes typing, rather than showing errors as they type.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- EmailField doesn't perform built-in email validation. The \`error\` prop is purely visual. You must validate the email format yourself and set the \`error\` prop accordingly.
- The component doesn't support multiple email addresses in a single field. For multiple recipients, render multiple EmailField components or use a custom pattern.
- EmailField doesn't display an email icon or prefix. It renders as a plain text input that only differs from [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield) in its virtual keyboard and autocomplete behavior.`,
    },
  ],
  related: [],
};

export default data;
