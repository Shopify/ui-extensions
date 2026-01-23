import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Action Extension API',
  description:
    'The Action Extension API lets you [build action extensions](/docs/apps/build/admin/actions-blocks/build-admin-action) that merchants access from the **More actions** menu on details and index pages. Use this API to create workflows for processing resources, configuring settings, or integrating with external systems.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminAction`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminaction) component.',
  definitions: [
    {
      title: 'ActionExtensionApi',
      description:
        'The `ActionExtensionApi` object provides methods for action extensions that render in modal overlays. Access these properties through the API to interact with the current context, control the modal, and display picker dialogs.',
      type: 'ActionExtensionApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Provide clear action names:** Use descriptive action titles that clearly communicate what the action does to help merchants understand the workflow before clicking.\n' +
        '- **Handle modal state appropriately:** Use `api.close()` to dismiss the modal when tasks complete or when merchants cancel operations.\n' +
        '- **Validate context data:** Check the `api.data.selected` property to ensure you have the expected resource IDs before performing operations.\n' +
        '- **Implement error handling:** Display clear error messages when operations fail and provide actionable feedback to help merchants resolve issues.\n' +
        '- **Use pickers for resource selection:** Use the [Resource Picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) and [Picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/picker-api) APIs to help merchants select additional resources or options within your action workflow.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Action extensions render in modal overlays and must be dismissed explicitly using `api.close()`.\n' +
        "- Page layout modifications and UI persistence outside the modal context aren't supported.",
    },
  ],
};

export default data;
