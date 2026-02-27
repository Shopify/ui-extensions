import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Index',
  overviewPreviewDescription:
    'Most apps need a way for merchants to manage collections of resources and perform actions on them.',
  description: `Most apps need a way for merchants to manage collections of resources and perform actions on them. For React Router-based Shopify apps, that index route file (\`app.[resources].jsx\`) should use a plural noun for the resource type. For example, \`app.products.jsx\` for managing products through your app. 

  The index pattern provides this foundation while following proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
  `,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Templates',
  isOneColumnLayout: true,
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/index.png',
  usedComponents: [
    'Badge',
    'Box',
    'Button',
    'Checkbox',
    'Choice',
    'ChoiceList',
    'Grid',
    'Icon',
    'Link',
    'Popover',
    'Section',
    'Stack',
    'Table',
    'TableBody',
    'TableCell',
    'TableHeader',
    'TableHeaderRow',
    'TableRow',
    'Text',
    'TextField',
    'Thumbnail',
    'Tooltip',
  ],
  recommendedApis: ['Navigation API', 'Toast API', 'Modal API'],
  recommendedCompositions: ['Empty state', 'Footer help'],
  defaultExample: {
    description:
      'This example displays an index table for a Product Quality Auditor app with filter tabs, search, sortable columns, bulk selection, and bulk actions. The table shows product thumbnails, quality scores, issue counts, and status badges.',
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
          layout: 'templatePattern',
          customStyles: {
            minHeight: '400px',
          },
        },
      ],
    },
  },
};

export default data;
