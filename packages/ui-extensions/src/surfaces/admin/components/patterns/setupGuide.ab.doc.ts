import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Setup guide',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Guide merchants through onboarding and setup with interactive checklists and progress tracking.',
  description: `Setup guide provides an interactive checklist to guide merchants through essential onboarding or configuration tasks. Progress is tracked visually, helping merchants complete all required steps.

  This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/setupGuide.png',
  defaultExample: {
    codeblock: {
      title: 'Setup guide',
      tabs: [
        {
          title: 'html',
          code: 'examples/setupGuide.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/setupGuide.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },

  related: [
    {
      name: 'Built for Shopify',
      subtitle: 'Requirements',
      url: '/docs/apps/launch/built-for-shopify/requirements',
      type: 'component',
    },
  ],
};

export default data;
