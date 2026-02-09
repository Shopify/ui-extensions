import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Index',
  overviewPreviewDescription:
    'Manage objects efficiently with dynamic table actions.',
  description: `The index template lets merchants view and manage collections of items in a table format. It provides search, filtering, sorting, and bulk actions to help merchants work efficiently with large data sets.

  Reveal row actions on hover or selection to keep the table visually clean. Use bulk selection for operations that apply to multiple items at once.

  This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
  `,
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
