import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Index table',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Display and manage data with powerful table interactions.',
  description: `An index table displays a collection of objects of the same type, like orders or products. The main job of an index table is to help merchants get an at-a-glance of the objects to perform actions or navigate to a full-page representation of it.
  | Used to | Examples |
  | --- | --- |
  | Display collections of similar objects | Products, orders, customers, discounts |
  | Perform bulk actions | Delete products, pause/activate campaigns |
  ---
  <style>
          div[class*="CodeBlock-module-CodeBlock_"] {
        max-height: calc(100vh - 400px) !important;
    }
    div[class*="Tabs-module-TabsContent_"] {
      overflow: auto !important;
    }
    div[class*="Screenshot-module-Screenshot_"] {
      display: none !important;
    }
  </style>`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/indexTable.png',
  defaultExample: {
    codeblock: {
      title: 'Index table',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/indexTable.html',
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
