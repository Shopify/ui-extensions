import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order Routing Rule API',
  description:
    'The Order Routing Rule API provides access to [order routing rule](/docs/apps/build/orders-fulfillment/order-routing-apps) configuration and settings management. Use this API to build custom configuration interfaces for order routing rules that determine fulfillment locations.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [FunctionSettings](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/functionsettings) component.',
  defaultExample: {
    description:
      'Set preferred and fallback fulfillment locations with [text field](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) inputs. This example applies two metafield changes in a single batch operation to configure location priority for order routing.',
    codeblock: {
      title: 'Configure location priority',
      tabs: [
        {
          title: 'React',
          code: './examples/configure-location-priority.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/configure-location-priority.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderRoutingRuleApi` object provides access to order routing rule data and configuration. Access the following properties on the `OrderRoutingRuleApi` object to interact with the current order routing rule context in the `admin.settings.order-routing-rule.render` target.',
      type: 'OrderRoutingRuleApi',
    },
  ],
  examples: {
    description: 'Configure order routing rules',
    examples: [
      {
        description:
          'Batch remove outdated metafields from routing configuration. This example maps deprecated keys to removal operations, displays current rule stats, and shows a success [banner](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/banner) after cleanup.',
        codeblock: {
          title: 'Remove deprecated settings',
          tabs: [
            {
              title: 'React',
              code: './examples/remove-deprecated-settings.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/remove-deprecated-settings.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Configure maximum distance, inventory checking, and excluded zip codes in one save. This example demonstrates using [number fields](/docs/api/admin-extensions/{API_VERSION}/components/forms/numberfield), [checkboxes](/docs/api/admin-extensions/{API_VERSION}/components/forms/checkbox), and JSON storage for complex routing criteria.',
        codeblock: {
          title: 'Set routing criteria',
          tabs: [
            {
              title: 'React',
              code: './examples/set-routing-criteria.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/set-routing-criteria.ts',
              language: 'ts',
            },
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
