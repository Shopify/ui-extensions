import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Index',
  overviewPreviewDescription:
    'Most apps need a way for merchants to manage collections of resources and perform actions on them.',
  description: `Most apps need a way for merchants to manage collections of resources and perform actions on them. For React Router-based Shopify apps, that index route file (\`app.[resources].jsx\`) should use a plural noun for the resource type. For example, \`app.products.jsx\` for managing products through your app. 

  The index pattern provides this foundation while following proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
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
