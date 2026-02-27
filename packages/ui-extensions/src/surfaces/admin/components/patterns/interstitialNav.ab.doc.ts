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
  recommendedTemplates: ['Settings'],
  defaultExample: {
    description:
      'This pattern displays a navigation menu with drill-down rows. [Clickable](/docs/api/app-home/polaris-web-components/actions/clickable) rows sit in a bordered [box](/docs/api/app-home/polaris-web-components/layout-and-structure/box). Each row uses the [icon](/docs/api/app-home/polaris-web-components/images/icon) with `name="chevron-right"` to indicate navigation.',
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
