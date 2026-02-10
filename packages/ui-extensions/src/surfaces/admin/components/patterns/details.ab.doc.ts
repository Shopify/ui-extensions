import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Details',
  overviewPreviewDescription:
    'From the index, edit and view individual resources within an efficient dual-column layout.',

  description: `From the index, merchants need to edit and view individual resources. For React Router-based Shopify apps, a resource type's details route file will use the pattern \`app.[resource].$id.jsx\`. For example, \`app.product.$id.jsx\` for managing a single product through your app.
  
  The details template provides an efficient dual-column layout that puts editable content front and center while keeping supporting information visible in the sidebar. Use the primary column for information that defines the resource. Use the secondary column for supporting information such as status, metadata, and summaries. Provide breadcrumb navigation so merchants can return to the previous page without using the browser back button.

  The details pattern follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
  `,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Templates',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/details.png',
  defaultExample: {
    codeblock: {
      title: 'Details',
      tabs: [
        {
          title: 'html',
          code: './examples/details.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: './examples/details.jsx',
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
