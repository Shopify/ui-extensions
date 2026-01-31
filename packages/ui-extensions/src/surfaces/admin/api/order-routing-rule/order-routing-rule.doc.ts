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
        'The `OrderRoutingRuleApi` object provides access to order routing rule data and configuration methods. Access the following properties on the `OrderRoutingRuleApi` object to interact with the current order routing rule context in the `admin.settings.order-routing-rule.render` target.',
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
        '- **Batch metafield changes for atomic updates:** `applyMetafieldsChange` accepts an array of change objects. Pass multiple changes in a single call to ensure all changes succeed or all fail together.\n' +
        "- **Check operation result type:** `applyMetafieldsChange` returns `{ type: 'success' }` or `{ type: 'error', message: string }`. Errors don't throw, so always check the returned `type`.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Metafields have [size limits](/docs/apps/build/metafields/metafield-limits). Individual values can't exceed 256KB, and total metafield storage per rule is limited.\n" +
        "- Rule priority is read-only. Evaluation order can't be modified through the settings interface. Merchants manage priority through the main rules interface.\n" +
        '- Batch operations are all-or-nothing. If any metafield change in the array fails validation, the entire batch fails and no changes apply.\n' +
        '- Metafield changes apply immediately. They persist right away without waiting for merchants to save the rule.',
    },
  ],
};

export default data;
