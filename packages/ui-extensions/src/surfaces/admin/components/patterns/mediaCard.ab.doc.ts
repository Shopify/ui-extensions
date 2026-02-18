import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
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
  usedComponents: [
    'Box',
    'Button',
    'Clickable',
    'Divider',
    'Grid',
    'Heading',
    'Image',
  ],
  recommendedApis: ['Intents API', 'Modal API', 'Share API', 'Toast API'],
  recommendedTemplates: ['Homepage'],
  defaultExample: {
    description:
      'This pattern uses [`s-box`](/docs/api/app-home/polaris-web-components/layout-and-structure/box) with `border` and `borderRadius` for the card container, [`s-clickable`](/docs/api/app-home/polaris-web-components/actions/clickable) to make the image tappable, and [`s-grid`](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) for the footer layout with a title and action button.',
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
          layout: 'compositionPattern',
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the media card pattern with additional functionality:

- [Intents API](#example-edit-resources-with-intents-api): Edit resources directly from your app.
- [Modal API](#example-confirm-delete-with-modal-api): Confirm deletion before removing a media card item.
- [Share API](#example-share-template-with-share-api): Share content via the native share sheet.
- [Toast API](#example-copy-link-with-toast-api): Show feedback when a link is copied.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use the [Modal API](/docs/api/app-home/apis/modal-api) to confirm deletion before removing a media card item.',
            codeblock: {
              title: 'Confirm delete with Modal API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/mediaCard-modal.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/mediaCard-modal.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Toast API](/docs/api/app-home/apis/toast) to show feedback when a link is copied to the clipboard.',
            codeblock: {
              title: 'Copy link with Toast API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/mediaCard-toast.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/mediaCard-toast.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              "Use the [Intents API](/docs/api/app-home/apis/intents) to open Shopify's resource editor when merchants click the edit button.",
            codeblock: {
              title: 'Edit resources with Intents API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/mediaCard-intents.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/mediaCard-intents.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Share API](/docs/api/app-home/apis/share) to let merchants share templates via the native share sheet on mobile devices.',
            codeblock: {
              title: 'Share template with Share API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/mediaCard-share.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/mediaCard-share.html',
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
