import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Interstitial nav',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Provide deeper navigation by linking merchants to related pages within a section.',
  description: `Interstitial navigation is used to connect merchants to deeper pages—such as settings, features, or resources—within a section of your app. It helps keep navigation clean and focused by avoiding multiple nested items, making it easier for merchants to discover and access important functionality.
 
  | Used to | Examples |
  | --- | --- |
  | Link to individual settings pages | Navigate from a settings overview to product settings or notification preferences |
  | Connect to feature-specific pages | Direct merchants from campaign overview to reporting or automation setup |
  | Guide merchants to supporting resources | Link to help documentation or integration guides from a central section |
  | Simplify navigation structure | Reduce clutter by providing access to deeper pages without multi-level menus |
  ---
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
          title: 'Preview',
          code: 'examples/interstitialNav.html',
          language: 'preview',
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
