import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Validation Settings API',
  description:
    'The Validation Settings API lets you [create complex validation rules](/docs/apps/build/checkout/cart-checkout-validation/create-admin-ui-validation) for cart and checkout validation. Use this API to build custom settings interfaces for [Shopify Functions](/docs/apps/build/functions) that implement validation logic.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`FunctionSettings`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/functionsettings) component.',
  definitions: [
    {
      title: 'applyMetafieldChange',
      description:
        'Applies a [metafield](/docs/apps/build/metafields) change to the validation settings. Use this method to update or remove metafields that store validation function configuration data. The method accepts a change object specifying the operation type, metafield key, namespace, value, and [value type](/docs/apps/build/metafields/list-of-data-types). Returns a promise that resolves to indicate success or provides an error message if the operation fails.',
      type: 'ApplyMetafieldChange',
    },
    {
      title: 'data',
      description:
        'The `data` object exposed to the extension containing the validation settings. Provides access to the validation object with its identifier and [metafields](/docs/apps/build/metafields), plus the [Shopify Function](/docs/apps/build/functions) identifier. Use this data to populate your settings UI and understand the current validation configuration in the `admin.settings.validation.render` target.',
      type: 'ValidationData',
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
        '- **Provide clear UI labels:** Use descriptive field labels and help text to explain how settings affect validation behavior.\n' +
        "- **Check for existing validation:** Use the presence of `api.data.validation` to determine if you're in create or edit mode and adjust your UI accordingly.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Validation settings are stored as metafields with [size limits](/docs/apps/build/metafields/metafield-limits) per field.\n' +
        '- Complex validation logic must be implemented in the Shopify Function itself, not in the settings UI.',
    },
  ],
};

export default data;
