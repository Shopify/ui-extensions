import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Empty state',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Provide guidance and encourage action when no data or items are available.',
  description: `Every app has moments when there's nothing to show yet and some action is required of the merchant before they can manage resources. The empty state composition turns these blank screens into opportunities by guiding merchants toward their first action.

  Include a clear explanation of what will appear here and a prominent call-to-action to help merchants get started. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/emptyState.png',
  usedComponents: [
    'Box',
    'Button',
    'ButtonGroup',
    'Grid',
    'Heading',
    'Image',
    'Paragraph',
    'Section',
    'Stack',
  ],
  recommendedApis: ['Intents API', 'Navigation API'],
  recommendedTemplates: ['Index'],
  defaultExample: {
    description:
      'Merchants need guidance and a clear next step when a list or page is empty. This pattern displays an empty state with centered content and primary and secondary actions. The [grid](/docs/api/app-home/web-components/layout-and-structure/grid) centers content vertically and horizontally. Use the [button group](/docs/api/app-home/web-components/actions/button-group) with `slot="primary-action"` and `slot="secondary-actions"` for clear next steps.',
    codeblock: {
      title: 'Display an empty state with centered content and actions',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/emptyState.html',
          language: 'preview',
        },
        {
          title: 'jsx',
          code: 'examples/emptyState.jsx',
          language: 'preview-jsx',
          layout: 'compositionPattern',
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the empty state with additional functionality:

- [Intents API](#example-open-shopify-interfaces-with-intents): Open native Shopify interfaces for browsing or creating resources.
- [Navigation API](#example-navigate-to-create-page): Navigate to a create page from the empty state action.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use `href` attributes to navigate merchants to a create page when they click the primary action button.',
            codeblock: {
              title: 'Navigate to create page',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/emptyState-nav.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/emptyState-nav.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Intents API](/docs/api/app-home/apis/intents) to make empty state actions open native Shopify interfaces, allowing merchants to browse existing resources or create new ones without leaving your app.',
            codeblock: {
              title: 'Open Shopify interfaces with Intents',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/emptyState-intents.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/emptyState-intents.html',
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
