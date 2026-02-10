import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Media card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Present visual information alongside actionable, educational content.',
  description: `The media card composition pattern pairs visual content (images, videos, illustrations) with actionable text to help merchants understand features or follow tutorials.

  Use media cards on your homepage to introduce features, in settings to explain options, or anywhere visual context helps merchants make decisions. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/mediaCard.png',
  defaultExample: {
    codeblock: {
      title: 'Media card',
      tabs: [
        {
          title: 'html',
          code: 'examples/mediaCard.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/mediaCard.jsx',
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
