import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
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
  isOneColumnLayout: true,
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/details.png',
  usedComponents: [
    'Badge',
    'Banner',
    'Box',
    'Button',
    'Divider',
    'Grid',
    'Heading',
    'Icon',
    'Image',
    'Link',
    'Modal',
    'MoneyField',
    'NumberField',
    'SearchField',
    'Section',
    'Select',
    'Stack',
    'Switch',
    'Table',
    'Text',
    'TextArea',
    'TextField',
    'Thumbnail',
    'UnorderedList',
    'URLField',
  ],
  recommendedApis: ['Modal API', 'Save Bar API'],
  recommendedCompositions: ['Footer help', 'Resource list'],
  defaultExample: {
    description:
      'Merchants need to edit and view a single resource with supporting info in the sidebar. This example presents a product details view for a Product Quality Auditor app with editable quality score fields in the main column and image and score in the sidebar.',
    codeblock: {
      title: 'Present a product details view with editable fields and sidebar',
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
          layout: 'templatePattern',
          customStyles: {
            minHeight: '400px',
          },
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the details template with additional functionality:

- [Modal API](#example-confirm-destructive-actions-with-modal-api): Confirm before performing destructive actions, like deleting a resource.
- [Save Bar API](#example-retain-unsaved-changes-with-save-bar): Display save and discard controls when forms have unsaved changes.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use the [Modal API](/docs/api/app-home/apis/modal) to confirm destructive actions like deleting a resource. The modal prevents accidental data loss by requiring explicit confirmation.',
            codeblock: {
              title: 'Confirm destructive actions with Modal API',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/details-modal.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: './examples/details-modal.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Add `data-save-bar` to your form element to enable the [Save Bar API](/docs/api/app-home/apis/save-bar), which displays save/discard controls when the form has unsaved changes.',
            codeblock: {
              title: 'Retain unsaved changes with Save Bar',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/details-save-bar.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: './examples/details-save-bar.html',
                  language: 'html',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
