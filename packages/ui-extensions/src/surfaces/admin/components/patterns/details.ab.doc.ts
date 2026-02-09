import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Details',
  overviewPreviewDescription:
    'Edit and view objects with efficient dual-column layout.',
  description: `A details page is where merchants edit and manage individual resources: product information, campaign settings, customer records, or any item your app lets them configure. Start with this template to create a dual-column layout that puts editable content front and center while keeping supporting information visible in the sidebar.

  Use the primary column for information that defines the resource. Use the secondary column for supporting information such as status, metadata, and summaries. Provide breadcrumb navigation so merchants can return to the previous page without using the browser back button.

  This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
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
