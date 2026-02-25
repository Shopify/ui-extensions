import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Admin action',
  description:
    'The admin action component configures the primary action, secondary action, and title for admin action extensions. Use admin action to define the core interaction points and header content that merchants see when your extension renders.' +
    '\n\nLearn how to [build an admin action extension](/docs/apps/build/admin/actions-blocks/build-admin-action).',
  requires:
    'the [Action Extension API](/docs/api/admin-extensions/{API_VERSION}/target-apis/core-apis/action-extension-api) or [Purchase Options Card Configuration API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/purchase-options-card-configuration-api).',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminaction.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the admin action component.',
      type: 'AdminActionProps',
    },
    {
      title: 'Slots',
      description:
        'The admin action component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'AdminActionSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Settings and templates',
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use action-oriented labels:** Write labels using the \`{verb}+{noun}\` format like **Save changes**, **Delete product**, or **Create discount** rather than generic labels like **Submit** or **OK**.
- **Follow action hierarchy:** Primary actions complete or advance the workflow (like **Save** or **Publish**), while secondary actions cancel or go back (like **Cancel** or **Discard changes**).
- **Write descriptive titles:** Titles should name the specific task like **Edit shipping settings** or **Archive old orders**, not generic phrases like **Actions** or **Settings**.
- **Limit to one task per action:** Each button should trigger a single operation. If you need multiple steps, guide merchants through them sequentially rather than combining operations.`,
    },
  ],
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/components/adminaction-example.png',
    description:
      'Set up the modal header and action [buttons](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/actions/button) for an admin action extension. This example shows a titled modal with primary and secondary action buttons.',
    codeblock: {
      title: 'Configure an admin action modal',
      tabs: [
        {
          title: '',
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: '',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Show a loading indicator while data is being fetched or processed. This example sets the `loading` property to display a loading state and disables the primary [button](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/actions/button).',
            codeblock: {
              title: 'Show a loading state',
              tabs: [
                {
                  title: '',
                  code: './examples/loading-state.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Embed a [form](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/form) inside the action modal to collect merchant input before saving. This example includes a [text field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/text-field) and [number field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/number-field) wrapped in a form component.',
            codeblock: {
              title: 'Add form fields to the modal',
              tabs: [
                {
                  title: '',
                  code: './examples/with-form-content.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Warn merchants before a permanent operation like deleting a resource. This example uses a critical [banner](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/feedback-and-status-indicators/banner) and a destructive primary [button](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/actions/button) to confirm deletion.',
            codeblock: {
              title: 'Confirm a destructive action',
              tabs: [
                {
                  title: '',
                  code: './examples/destructive-action.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Display read-only resource information inside a modal before the merchant takes action. This example shows an order summary with [badges](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/feedback-and-status-indicators/badge), [dividers](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/layout-and-structure/divider), and a fulfillment [button](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/actions/button).',
            codeblock: {
              title: 'Show resource details in a modal',
              tabs: [
                {
                  title: '',
                  code: './examples/with-resource-details.html',
                  language: 'preview',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  related: [],
};

export default data;
