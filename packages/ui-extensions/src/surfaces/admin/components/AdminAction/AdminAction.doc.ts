import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminAction',
  description:
    'The AdminAction component configures the modal that appears when users trigger your admin action extension. Use AdminAction to set the title, primary button, secondary button, and loading state for the modal.\n\nLearn how to [build an admin action extension](/docs/apps/build/admin/actions-blocks/build-admin-action).',
  requires:
    'the [Action Extension API](/docs/api/admin-extensions/{API_VERSION}/target-apis/core-apis/action-extension-api) or [Purchase Options Card Configuration API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/purchase-options-card-configuration-api).',
  thumbnail: 'adminaction-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the AdminAction component.',
      type: 'AdminActionProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Settings and templates',
  defaultExample: {
    image: 'adminaction-default.png',
    description:
      'Sync product data to a warehouse system from a modal with primary and cancel actions. This example uses `AdminAction` with `primaryAction` and `secondaryAction` [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) props to confirm or dismiss the sync.',
    codeblock: {
      title: 'Configure action modal with buttons',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminAction/examples/basic-adminaction.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-adminaction.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Build a form inside an action modal with [TextField](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) and [Select](/docs/api/admin-extensions/{API_VERSION}/components/forms/select) inputs. This example collects a warehouse SKU and location assignment, submitting the form data through the primary action button.',
        codeblock: {
          title: 'Build a modal form',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminAction/examples/adminaction-form.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/adminaction-form.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          "Show a [ProgressIndicator](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/progressindicator) while fetching data from the [GraphQL Admin API](/docs/api/admin-graphql/), then replace it with product details. This example queries product information when the modal opens and displays the results after they've loaded.",
        codeblock: {
          title: 'Load data into action modal',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminAction/examples/adminaction-loading.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/adminaction-loading.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Keep the modal focused on a single task:** Each action extension should handle one specific workflow so merchants can complete it quickly without confusion.
- **Show a loading state while fetching initial data:** Use the loading state to prevent merchants from interacting with incomplete content while your extension initializes.
- **Place the most important action as the primary action:** The primary action should be the main submit or confirm action. Use the secondary action for cancel or dismiss.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The Shopify admin controls the modal dimensions. Extensions can't adjust the width or height.
- The Shopify admin renders the modal as a blocking overlay. The underlying page isn't interactive until the merchant completes or dismisses the action.`,
    },
  ],
  related: [],
};

export default data;
