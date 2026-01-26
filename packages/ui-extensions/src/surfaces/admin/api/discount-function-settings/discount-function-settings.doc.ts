import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discount Function Settings API',
  description:
    'The Discount Function Settings API lets you [build a UI extension for discount functions](/docs/apps/build/discounts/build-ui-extension) that provides custom configuration interfaces. Use this API to manage discount function settings and build settings interfaces for [Shopify Functions](/docs/apps/build/functions) that implement discount logic.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`FunctionSettings`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/functionsettings) component.',
  definitions: [
    {
      title: 'applyMetafieldChange',
      description:
        'Applies a [metafield](/docs/apps/build/metafields) change to the discount function settings. Use this method to update or remove metafields that store function configuration data. The method accepts a change object specifying the operation type, metafield key, namespace, value, and [value type](/docs/apps/build/metafields/list-of-data-types). Returns a promise that resolves to indicate success or provides an error message if the operation fails.',
      type: 'ApplyMetafieldChange',
    },
    {
      title: 'data',
      description:
        'The `data` object exposed to the extension containing the discount function settings. Provides access to the discount identifier and associated [metafields](/docs/apps/build/metafields) that store function configuration values. Use this data to populate your settings UI and understand the current function configuration in the `admin.discount-details.function-settings.render` target.',
      type: 'DiscountFunctionSettingsData',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Validate metafield changes:** Ensure metafield values are valid and properly formatted before calling `applyMetafieldChange` to avoid errors.\n' +
        '- **Handle operation results:** Check the result `type` for `success` or `error` and display appropriate feedback to merchants.\n' +
        '- **Use consistent namespaces:** Group related metafields under the same namespace for organized configuration management.\n' +
        '- **Provide clear UI labels:** Use descriptive field labels and help text to explain how settings affect discount behavior.\n' +
        '- **Load existing settings:** Use `api.data.metafields` to populate your UI with current configuration values when merchants edit existing discounts.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Discount function settings are stored as metafields with [size limits](/docs/apps/build/metafields/metafield-limits) per field.\n' +
        '- The `applyMetafieldChange` method processes one metafield operation at a time.',
    },
  ],
};

export default data;
