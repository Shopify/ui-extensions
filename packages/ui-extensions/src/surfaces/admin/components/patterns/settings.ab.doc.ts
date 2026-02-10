import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Settings',
  overviewPreviewDescription:
    'All apps will have settings merchants will want to configure to control your app\'s behavior.',

  description: `All apps have settings merchants need to configure to control your app's behavior. For React Router-based Shopify apps, this will be defined in a route file like \`app.settings.jsx\`. 
  
  The settings template organizes related options into logical groups that provides contextual help alongside form controls. It also leverages the Save Bar API to protect unsaved changes from being lost.

  The settings pattern follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
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
