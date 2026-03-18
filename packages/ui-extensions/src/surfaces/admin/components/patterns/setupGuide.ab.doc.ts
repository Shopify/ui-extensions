import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
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
  usedComponents: [
    'Box',
    'Button',
    'Checkbox',
    'Divider',
    'Grid',
    'Heading',
    'Image',
    'Paragraph',
    'Section',
    'Stack',
  ],
  recommendedApis: ['Navigation API', 'Toast API'],
  recommendedTemplates: ['Homepage'],
  defaultExample: {
    description:
      'New merchants need an interactive checklist to complete onboarding or setup tasks. This pattern guides merchants through setup with expandable steps and completion tracking. The [checkbox](/docs/api/app-home/web-components/forms/checkbox) tracks completion status. Each step includes a heading, description, illustration, and action button, with a progress indicator for overall completion.',
    codeblock: {
      title: 'Guide merchants through setup with expandable steps',
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
          layout: 'compositionPattern',
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the setup guide with additional functionality:

- [Navigation API](#example-navigate-to-step-actions): Navigate to relevant pages from step action buttons.
- [Toast API](#example-show-step-completion-with-toast): Show feedback when merchants complete setup steps.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use `href` attributes on step action buttons to navigate merchants to relevant pages for completing each step.',
            codeblock: {
              title: 'Navigate to step actions',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/setupGuide-nav.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/setupGuide-nav.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Toast API](/docs/api/app-home/apis/toast) to show feedback when merchants complete setup steps.',
            codeblock: {
              title: 'Show step completion with Toast',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/setupGuide-toast.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/setupGuide-toast.html',
                  language: 'html',
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
