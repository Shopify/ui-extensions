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
      title: 'Methods',
      description:
        'The `ActionExtensionApi` object provides methods for action extensions that render in modal overlays. Access the following methods on the `ActionExtensionApi` object to interact with the current context, control the modal, and display picker dialogs.',
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
        '- **Check array length for bulk operations:** When actions appear on index pages with bulk selection, `api.data.selected` can contain multiple resources. Check the array length and handle batch operations accordingly.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Action extensions must call `api.close()` to dismiss the modal. Modal actions remain open indefinitely until explicitly closed.\n' +
        "- Modal overlays can't be resized. The modal dimensions are fixed by the Shopify admin.\n" +
        "- Action extensions can't modify the page layout underneath the modal or persist UI after closing.\n" +
        "- Multiple modals can't be stacked.",
    },
  ],
};

export default data;
