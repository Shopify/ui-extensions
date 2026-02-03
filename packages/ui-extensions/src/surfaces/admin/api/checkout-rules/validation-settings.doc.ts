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
  defaultExample: {
    description:
      'Calls `applyMetafieldChange()` with key `min_quantity`, value `5`, and `valueType: "number_integer"`, then checks `result.type === "success"` to confirm the save or log errors. Stores the minimum quantity rule your checkout function enforces.',
    codeblock: {
      title: 'Set minimum quantity',
      tabs: [
        {code: './examples/set-minimum-quantity.ts', language: 'ts'},
        {code: './examples/set-minimum-quantity.tsx', language: 'tsx'},
      ],
    },
  },
  examples: {
    description: 'Configure cart and checkout validation rules',
    examples: [
      {
        description:
          'Saves blocked countries (US, CA, MX) as a JSON array using `applyMetafieldChange()` with key `blocked_countries` and `valueType: "json"` in the `validation` namespace. Your checkout function reads this configuration to block orders to restricted destinations.',
        codeblock: {
          title: 'Configure shipping restrictions',
          tabs: [
            {
              code: './examples/configure-shipping-restrictions.ts',
              language: 'ts',
            },
            {
              code: './examples/configure-shipping-restrictions.tsx',
              language: 'tsx',
            },
          ],
        },
      },
      {
        description:
          'Checks for `data.validation` presence to determine edit vs. create mode, then loads existing metafields or initializes defaults. For configuration UIs that prepopulate forms when editing existing rules.',
        codeblock: {
          title: 'Load validation configuration',
          tabs: [
            {code: './examples/load-validation-config.ts', language: 'ts'},
            {code: './examples/load-validation-config.tsx', language: 'tsx'},
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
        "- **Check operation result type:** `applyMetafieldChange` returns `{ type: 'success' }` or `{ type: 'error', message: string }`. Errors don't throw exceptions, so always check the returned `type` property.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Metafields have [size limits](/docs/apps/build/metafields/metafield-limits). Individual values can't exceed 256KB, and total metafield storage per validation is limited.\n" +
        '- The `applyMetafieldChange` method is sequential. Operations process one at a time. Rapid successive calls can cause race conditions where later updates overwrite earlier ones.\n' +
        '- Metafield changes apply immediately. Unlike admin forms, metafield changes persist right away without waiting for merchants to save.\n' +
        "- Your extension can't modify the Function ID. The `shopifyFunctionId` is read-only and determined when the validation rule is created.",
    },
  ],
};

export default data;
