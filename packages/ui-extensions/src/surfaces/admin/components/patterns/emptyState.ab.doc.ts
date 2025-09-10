import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmptyState',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Provide guidance and encourage action when no data or items are available.',
  description: `Empty states are used when a list, table, or chart has no items or data to show. This is an opportunity to provide explanation or guidance to help merchants progress. The empty state component is intended for use when a full page in the admin is empty, and not for individual elements or areas in the interface.

  | Used to    | Examples |
  | -------- | ------- |
  | Offer a clear next step when no data is present      | Prompt merchants to create their first campaign   |
  | Encourage activation of features         | Suggest setting up a subscription plan when none exist      |

  ---
  

  
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/emptyState.png',
  defaultExample: {
    codeblock: {
      title: 'EmptyState',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/emptyState.html',
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
