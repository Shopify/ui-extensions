import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from '../../../../docs/shared/components/FunctionSettings';

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
      sectionContent: `- **Label settings clearly:** Instead of technical names like **Max threshold**, use merchant-friendly labels like **Maximum discount amount** or **Order value limit**.
- **Validate with specific feedback:** Check that percentages are between 0-100, that monetary values are positive, and that required fields are filled. Provide clear error messages when validation fails.
- **Explain impact with the details property:** Use the \`details\` property to explain what each setting does and its impact on merchant operations.
- **Set appropriate defaults:** Pre-select the most common configuration to reduce setup friction for merchants.
- **Group related settings:** Use sections to organize settings by function so merchants can find what they need quickly.`,
    },
  ],
  definitions: [
    {
      title: 'Events',
      description:
        'The `FunctionSettings` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'FormEvents',
    },
  ],
  defaultExample: {
    codeblock: {
      title: '',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.tsx',
          language: 'jsx',
        },
      ],
    },
  },
};

export default data;
