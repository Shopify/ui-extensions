import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Index',
  overviewPreviewDescription:
    'Manage objects efficiently with dynamic table actions.',
  description: `The index layout lets merchants view and manage all their objects at once in a table format. They can filter, sort and do quick actions on their objects. To prevent tables from becoming visually cluttered, reveal actions only when the row is hovered over or selected

  | Used to | Examples |
  | --- | --- |
  | View all objects at once | Products, orders, customers, discounts |
  | Perform bulk actions | Delete products, pause/activate campaigns |

  ![Preview of the index pattern](/assets/templated-apis-screenshots/admin/patterns/index-example.png)

  This pattern uses \`Badge\`, \`Box\`, \`Button\`, \`Clickable\`, \`Grid\`, \`Heading\`, \`Image\`, \`Link\`, \`Paragraph\`, \`Section\`, \`Stack\`, and \`Table\` components.

  ---

  ## Design guidelines
  Design your index page so users can organize and take action on resource objects.

  ### Navigation

  * Users must be able to return to the previous page without using the browser button. To achieve this, your app can provide breadcrumbs or a Back button on the page.
  * Offer users clear and predictable action labels.

  ---

  ### Layout

  * Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.
  * For resource index pages, use a full-width page. This is helpful when users are dealing with lists of data that have many columns.

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
  subCategory: 'Templates',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/index.png',
  defaultExample: {
    codeblock: {
      title: 'Index',
      tabs: [
        {
          title: 'html',
          code: './examples/index.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: './examples/index.jsx',
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
