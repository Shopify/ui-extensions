import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from '../../../../docs/shared/components/Form';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/form.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Group related fields logically:** Organize fields by category or workflow step so merchants can complete forms efficiently.
- **Validate with specific error messages:** Instead of **Invalid input**, provide actionable feedback like **Email must include @ symbol** or **Password must be at least 8 characters**.
- **Mark required fields clearly:** Use the \`required\` property and show validation errors only after user interaction or submission attempt.
- **Choose field types that match data:** Use [\`EmailField\`](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/emailfield) for emails, [\`NumberField\`](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/numberfield) for quantities, and [\`DateField\`](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/datefield) for dates to provide appropriate keyboards and pickers.
- **Provide submission feedback:** Show loading states during processing and clear success or error messages after completion. Prevent duplicate submissions while processing.
- **Handle unsaved changes:** For long or complex forms, consider auto-saving drafts or prompting before navigation when changes exist.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Unlike native HTML forms, the component doesn't automatically submit data using HTTP. You must register a \`submit\` event handler to process form data programmatically.`,
    },
  ],
  definitions: [
    {
      title: 'Events',
      description:
        'The `Form` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'FormEvents',
    },
  ],
  defaultExample: {
    codeblock: {
      title: '',
      tabs: [
        {
          code: '../../../../../docs/surfaces/admin/staticPages/examples/form-default-value.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
};

export default data;
