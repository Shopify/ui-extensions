import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Setup guide',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Guide merchants through onboarding and setup with interactive checklists and progress tracking.',
  description: `Setup guide provides an interactive checklist to guide merchants through essential onboarding or configuration tasks. Progress is tracked visually, helping merchants complete all required steps and understand what remains.
  | Used to | Examples |
  | --- | --- |
  | Onboard merchants | Initial app setup |
  | Track completion of multi-step processes | Necessary setup steps |
  ---
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
