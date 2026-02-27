import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Callout card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Encourage merchants to take action on new features or opportunities.',
  description: `When you release a new feature or want to highlight an opportunity, the callout card composition draws attention without being intrusive. It encourages merchants to take action with a clear message and prominent button.

  Use callout cards sparingly to announce features, promote functionality, or guide merchants through common first actions. Remove them once merchants have engaged. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/calloutCard.png',
  usedComponents: [
    'Box',
    'Button',
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
      'Merchants can take action on new features or opportunities you highlight. This pattern presents a callout card that stacks content on smaller screens with a prominent illustration and call-to-action. The [grid](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) uses responsive column templates. The illustration and button draw attention to important actions or promotions.',
    codeblock: {
      title: 'Display a callout card with illustration and call-to-action',
      tabs: [
        {
          title: 'html',
          code: 'examples/calloutCard.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/calloutCard.jsx',
          language: 'preview-jsx',
          layout: 'compositionPattern',
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the callout card with additional functionality:

- [Navigation API](#example-navigate-to-feature-pages): Add links to the pattern for CTA navigation.
- [Toast API](#example-show-dismiss-feedback-with-toast): Dismiss feedback.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use `href` attributes on buttons to navigate merchants to feature pages when they click CTA buttons.',
            codeblock: {
              title: 'Navigate to feature pages',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/calloutCard-nav.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/calloutCard-nav.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Toast API](/docs/api/app-home/apis/toast) to show feedback when the callout card is dismissed.',
            codeblock: {
              title: 'Show dismiss feedback with Toast',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/calloutCard-toast.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/calloutCard-toast.html',
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
