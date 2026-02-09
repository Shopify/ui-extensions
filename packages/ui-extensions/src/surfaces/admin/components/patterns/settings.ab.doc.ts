import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Settings',
  overviewPreviewDescription:
    'Organize settings into categories for easy navigation.',
  description: `Settings pages let merchants configure app behavior and preferences. Organize related settings into logical groups and use a two-column layout to provide contextual help alongside form controls.

  Use the Save Bar API to protect unsaved changes and give merchants confidence their changes are preserved.

  This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
  `,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Templates',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/settings.png',
  defaultExample: {
    codeblock: {
      title: 'Settings',
      tabs: [
        {
          title: 'html',
          code: 'examples/settings.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/settings.jsx',
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
