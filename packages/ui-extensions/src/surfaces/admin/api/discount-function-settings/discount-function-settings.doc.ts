import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discount Function Settings API',
  description:
    'The Discount Function Settings API lets you build UI extensions that provide custom configuration interfaces for [discount functions](/docs/apps/build/discounts/build-ui-extension). Use this API to create settings pages for [Shopify Functions](/docs/apps/build/functions) that implement discount logic.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`FunctionSettings`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/functionsettings) component.',
  definitions: [
    {
      title: 'applyMetafieldChange',
      description:
        'Updates or removes [metafields](/docs/apps/build/metafields) that store discount function configuration data. Accepts a change object with the operation type, key, namespace, value, and [value type](/docs/apps/build/metafields/list-of-data-types).',
      type: 'ApplyMetafieldChange',
    },
    {
      title: 'data',
      description:
        'The `data` object exposed to the extension containing the discount function settings. Provides access to the discount identifier and associated [metafields](/docs/apps/build/metafields) that store function configuration values. Use this data to populate your settings UI and understand the current function configuration in the `admin.discount-details.function-settings.render` target.',
      type: 'DiscountFunctionSettingsData',
    },
  ],
  defaultExample: {
    description:
      'Calls `applyMetafieldChange()` with `number_decimal` type to save a minimum purchase threshold of $50. Proper handling for currency values.',
    codeblock: {
      title: 'Configure discount threshold',
      tabs: [
        {code: './examples/configure-discount-threshold.ts', language: 'ts'},
        {code: './examples/configure-discount-threshold.tsx', language: 'tsx'},
      ],
    },
  },
  examples: {
    description: 'Configure discount function settings',
    examples: [
      {
        description:
          'Saves eligible customer tags (vip, wholesale) as a JSON array and a usage limit (100) as an integer, applying both changes sequentially. For customer segment restrictions or usage caps.',
        codeblock: {
          title: 'Configure eligibility rules',
          tabs: [
            {code: './examples/configure-eligibility-rules.ts', language: 'ts'},
            {
              code: './examples/configure-eligibility-rules.tsx',
              language: 'tsx',
            },
          ],
        },
      },
      {
        description:
          'Uses `useEffect` to reduce the metafields array into a settings object on mount, checking for missing values and applying defaults. For edit workflows that prepopulate forms with existing discount settings.',
        codeblock: {
          title: 'Load existing settings',
          tabs: [
            {code: './examples/load-existing-settings.ts', language: 'ts'},
            {code: './examples/load-existing-settings.tsx', language: 'tsx'},
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
        "- Metafields are subject to [size limits](/docs/apps/build/metafields/metafield-limits). Individual metafield values can't exceed 256KB, and total metafields per resource have storage limits.\n" +
        '- The `applyMetafieldChange` method is sequential. Operations are processed one at a time. Rapid successive calls might lead to race conditions where new updates overwrite earlier ones.\n' +
        '- Metafield changes are applied immediately. Unlike some admin forms, metafield changes persist right away without waiting for the merchant to save the discount.',
    },
  ],
};

export default data;
