import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order Routing Rule API',
  description:
    'The Order Routing Rule API provides access to [order routing rule](/docs/apps/build/orders-fulfillment/order-routing-apps) configuration and settings management. Use this API to build custom configuration interfaces for order routing rules that determine fulfillment locations.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`FunctionSettings`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/functionsettings) component.',
  definitions: [
    {
      title: 'OrderRoutingRuleApi',
      description:
        'The `OrderRoutingRuleApi` object provides access to order routing rule data and configuration methods. Access these properties through the API to interact with the current order routing rule context in the `admin.settings.order-routing-rule.render` target.',
      type: 'OrderRoutingRuleApi',
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
        '- **Validate metafield changes:** Ensure metafield values are valid and properly formatted before calling `applyMetafieldsChange` to avoid errors.\n' +
        '- **Use batch operations:** When updating multiple metafields, use array operations in `applyMetafieldsChange` for better performance.\n' +
        '- **Use consistent namespaces:** Group related metafields under the same namespace for organized configuration management.\n' +
        '- **Provide clear UI labels:** Use descriptive field labels and help text to explain how settings affect order routing behavior.\n' +
        "- **Show priority context:** Display the rule's priority to help merchants understand the evaluation order when multiple rules exist.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Order routing rule settings are stored as metafields with [size limits](/docs/apps/build/metafields/metafield-limits) per field.\n' +
        "- Evaluation priority modification through the settings interface isn't supported.",
    },
  ],
};

export default data;
