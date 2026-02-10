import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Setup guide',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Guide merchants through onboarding and setup with interactive checklists and progress tracking.',
  description: `New merchants need guidance to get started with your app. The setup guide composition provides an interactive checklist with visual progress tracking to walk them through essential onboarding or configuration tasks.

  Use this composition on your homepage or a dedicated onboarding page. Mark tasks as complete when merchants finish them to reinforce progress. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
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
