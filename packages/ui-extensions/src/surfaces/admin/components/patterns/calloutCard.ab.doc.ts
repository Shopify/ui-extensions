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
  recommendedTemplates: ['Details'],
  defaultExample: {
    description:
      'This pattern presents a callout card that stacks content on smaller screens with a prominent illustration and call-to-action. The [grid](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) uses responsive column templates. The illustration and button draw attention to important actions or promotions.',
    codeblock: {
      title: 'Callout card',
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
};

export default data;
