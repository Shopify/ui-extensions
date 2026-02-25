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
    description:
      'Set a low-stock notification email address and save it. This example uses `EmailField` to capture the address, with a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that saves the notification email.',
    codeblock: {
      title: 'Collect notification email',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/EmailField/examples/basic-emailfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-emailfield.example.ts',
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
          'Validate email format on each keystroke using the `error` prop and `required` attribute. This example checks for the presence of an `@` symbol as the merchant types and displays an inline error message, preventing invalid email addresses from being saved.',
        codeblock: {
          title: 'Validate email format inline',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/EmailField/examples/emailfield-validation.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/emailfield-validation.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Pre-fill an email field with a default value using the `value` prop for edit workflows. This example combines an `EmailField` with a [TextField](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) to build a complete fulfillment contact form, with a primary email pre-populated and an optional CC field.',
        codeblock: {
          title: 'Pre-fill contact form fields',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/EmailField/examples/emailfield-prefilled.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/emailfield-prefilled.example.ts',
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
      sectionContent: `- **Use EmailField instead of TextField for email input:** EmailField triggers an email-optimized keyboard on mobile devices and supports email-specific autocomplete, reducing input friction.
- **Validate on blur, not on every keystroke:** Use the \`onBlur\` callback to trigger validation after the merchant finishes typing, rather than showing errors as they type.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- EmailField doesn't perform built-in email validation. The \`error\` prop is purely visual. You must validate the email format yourself and set the \`error\` prop accordingly.
- The component doesn't support multiple email addresses in a single field. For multiple recipients, render multiple EmailField components or use a custom pattern.
- EmailField doesn't display an email icon or prefix. It renders as a plain text input that differs from [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield) only in its virtual keyboard and autocomplete behavior.`,
    },
  ],
  related: [],
};

export default data;
