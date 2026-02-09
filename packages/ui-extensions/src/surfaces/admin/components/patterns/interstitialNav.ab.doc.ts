import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Interstitial nav',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Provide deeper navigation by linking merchants to related pages within a section.',
  description: `Interstitial navigation connects merchants to deeper pages—like settings, features, or resources—within your app. It keeps navigation clean by avoiding multiple nested items.

  This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/interstitialNav.png',
  defaultExample: {
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
