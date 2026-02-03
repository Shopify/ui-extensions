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
  defaultExample: {
    description:
      'Applies two metafield changes in one batch using `applyMetafieldsChange()`, setting New York Warehouse as preferred and Los Angeles Warehouse as fallback. Both save in a single operation.',
    codeblock: {
      title: 'Configure location priority',
      tabs: [
        {code: './examples/configure-location-priority.ts', language: 'ts'},
        {code: './examples/configure-location-priority.tsx', language: 'tsx'},
      ],
    },
  },
  examples: {
    description: 'Configure order routing rules',
    examples: [
      {
        description:
          'Maps deprecated keys to removal operations and calls `applyMetafieldsChange()` once to clean up old settings. For migrating routing configurations.',
        codeblock: {
          title: 'Remove deprecated settings',
          tabs: [
            {code: './examples/remove-deprecated-settings.ts', language: 'ts'},
            {
              code: './examples/remove-deprecated-settings.tsx',
              language: 'tsx',
            },
          ],
        },
      },
      {
        description:
          'Sets maximum distance (50km), inventory checking (true), and excluded zip codes (90210, 10001) in one batch. Demonstrates using different value types (integer, boolean, JSON) in a single `applyMetafieldsChange()` call.',
        codeblock: {
          title: 'Set routing criteria',
          tabs: [
            {code: './examples/set-routing-criteria.ts', language: 'ts'},
            {code: './examples/set-routing-criteria.tsx', language: 'tsx'},
          ],
        },
      },
    ],
  },
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
        '- Batch operations are all-or-nothing. If any metafield change in the array fails validation, then the entire batch fails and no changes apply.\n' +
        '- Metafield changes apply immediately. They persist right away without waiting for merchants to save the rule.',
    },
  ],
};

export default data;
