import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Interstitial nav',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Provide deeper navigation by linking merchants to related pages within a section.',
  description: `As your app grows, merchants need clear paths to deeper pages without cluttering your main navigation. The interstitial nav composition provides a clean way to link to settings, features, or resources within a section.

  Use this pattern on pages that serve as hubs for related functionality, like a settings overview that links to individual settings pages. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/interstitialNav.png',
  usedComponents: [
    'Box',
    'Clickable',
    'Divider',
    'Grid',
    'Heading',
    'Icon',
    'Paragraph',
    'Section',
  ],
  recommendedTemplates: ['Details'],
  defaultExample: {
    description:
      'This pattern uses [`s-clickable`](/docs/api/app-home/polaris-web-components/actions/clickable) rows within a bordered [`s-box`](/docs/api/app-home/polaris-web-components/layout-and-structure/box) to create a navigation menu. Each row uses [`s-icon`](/docs/api/app-home/polaris-web-components/images/icon) with `name="chevron-right"` to indicate drill-down navigation.',
    codeblock: {
      title: 'Interstitial nav',
      tabs: [
        {
          title: 'html',
          code: 'examples/interstitialNav.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/interstitialNav.jsx',
          language: 'preview-jsx',
          layout: 'compositionPattern',
        },
      ],
    },
  },
};

export default data;
