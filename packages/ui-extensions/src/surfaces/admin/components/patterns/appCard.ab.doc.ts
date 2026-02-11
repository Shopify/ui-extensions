import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'App card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Introduce and promote relevant apps to merchants within your app experience.',
  description: `Some tasks are better handled by specialized apps. The app card composition provides a consistent way to recommend complementary apps that extend your functionality or help merchants accomplish related tasks.

  Use app cards to suggest integrations, recommend partners, or highlight apps that work well alongside yours. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/appCard.png',
  usedComponents: [
    'Box',
    'Button',
    'Clickable',
    'Grid',
    'Heading',
    'Paragraph',
    'Stack',
    'Thumbnail',
  ],
  recommendedApis: ['Navigation API'],
  recommendedTemplates: ['Homepage'],
  defaultExample: {
    description:
      'This pattern uses [`s-clickable`](/docs/api/app-home/polaris-web-components/actions/clickable) as the card container to make the entire card tappable. The [`s-thumbnail`](/docs/api/app-home/polaris-web-components/images/thumbnail) displays the app icon, and [`s-grid`](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) aligns the content.',
    codeblock: {
      title: 'App card',
      tabs: [
        {
          title: 'html',
          code: 'examples/appCard.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/appCard.jsx',
          language: 'preview-jsx',
          layout: 'compositionPattern',
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the app card with additional functionality:

- [Navigation API](#example-navigate-to-app-store): Provide a link a recommended app when merchants click the card or its install button.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use `href` attributes to navigate merchants to the App Store when they click the card or install button.',
            codeblock: {
              title: 'Navigate to App Store',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/appCard-nav.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/appCard-nav.html',
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
