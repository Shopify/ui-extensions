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
  recommendedTemplates: ['Details'],
  defaultExample: {
    description:
      'This pattern displays a tappable app card with thumbnail and content layout. The [clickable](/docs/api/app-home/polaris-web-components/actions/clickable) component wraps the card, the [thumbnail](/docs/api/app-home/polaris-web-components/images/thumbnail) shows the app icon, and the [grid](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) aligns the content.',
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
};

export default data;
