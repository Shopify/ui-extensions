import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminAction',
  description:
    'The AdminAction component configures the modal that appears when users trigger your admin action extension. Use AdminAction to set the title, primary button, secondary button, and loading state for the modal.\n\nLearn how to [build an admin action extension](/docs/apps/build/admin/actions-blocks/build-admin-action).',
  requires:
    'the [Action Extension API](/docs/api/admin-extensions/{API_VERSION}/target-apis/core-apis/action-extension-api).',
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
    codeblock: {
      title: 'Set the primary and secondary action of the Action modal.',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminAction/examples/basic-adminaction.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-adminaction.example.ts',
          language: 'js',
        },
      ],
    },
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
      sectionContent: `- The modal dimensions are managed by the Shopify admin and can't be customized by the extension.
- The modal renders as an overlay that blocks interaction with the underlying admin page until the merchant completes or dismisses the action.`,
    },
  ],
  related: [],
};

export default data;
