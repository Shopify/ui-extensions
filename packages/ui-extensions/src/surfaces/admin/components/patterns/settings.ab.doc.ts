import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Settings',
  overviewPreviewDescription:
    "All apps will have settings merchants will want to configure to control your app's behavior.",

  description: `All apps have settings merchants need to configure to control your app's behavior. For React Router-based Shopify apps, this will be defined in a route file like \`app.settings.jsx\`. 
  
  The settings template organizes related options into logical groups that provide contextual help alongside form controls. It also leverages the Save Bar API to protect unsaved changes from being lost.

  The settings pattern follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
  `,
  isVisualComponent: true,
  isOneColumnLayout: true,
  category: 'Patterns',
  subCategory: 'Templates',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/settings.png',
  usedComponents: [
    'Badge',
    'Banner',
    'Box',
    'Divider',
    'Grid',
    'Heading',
    'Icon',
    'Link',
    'NumberField',
    'Section',
    'Stack',
    'Switch',
    'Text',
  ],
  recommendedApis: ['Modal API', 'Save Bar API', 'Toast API'],
  recommendedCompositions: [
    'Account connection',
    'Footer help',
    'Interstitial nav',
  ],
  defaultExample: {
    description:
      'This example configures a settings page for a Product Quality Auditor app with quality criteria toggles, weight controls, and notification preferences in the main column and contextual help in the aside. Add `data-save-bar` to your form element to enable the [Save Bar API](/docs/api/app-home/apis/save-bar), which displays save/discard controls when the form has unsaved changes.',
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
          layout: 'templatePattern',
          customStyles: {
            minHeight: '400px',
          },
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the settings template with additional functionality:

- [Modal API](#example-confirm-reset-with-modal-api): Confirm destructive actions like resetting settings to defaults.
- [Toast API](#example-show-save-feedback-with-toast-api): Show feedback when settings are saved successfully.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use the [Modal API](/docs/api/app-home/apis/modal) to confirm destructive actions like resetting all settings to their default values.',
            codeblock: {
              title: 'Confirm reset with Modal API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/settings-modal.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/settings-modal.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Toast API](/docs/api/app-home/apis/toast) to show feedback when settings are saved. Combine with the Save Bar API for a complete form experience.',
            codeblock: {
              title: 'Show save feedback with Toast API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/settings-toast.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/settings-toast.html',
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
