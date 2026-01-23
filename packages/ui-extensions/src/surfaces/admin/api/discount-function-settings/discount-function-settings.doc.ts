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
    {
      title: 'discounts',
      description:
        'The `discounts` object provides reactive access to configuration, including classes (product, order, or shipping) and method (automatic or code). Use the signals to read current values and the update functions to modify classes in your settings UI. These values automatically update when changed by the merchant or system.',
      type: 'DiscountsApi',
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
        "- **Check operation result type:** `applyMetafieldChange` returns `{ type: 'success' }` or `{ type: 'error', message: string }`. Errors don't throw exceptions, so always check the returned `type` property.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Metafields are subject to [size limits](/docs/apps/build/metafields/metafield-limits). Individual metafield values can't exceed 256KB, and total metafields per resource have storage limits.\n" +
        '- The `applyMetafieldChange` method is sequential. Operations are processed one at a time. Rapid successive calls may lead to race conditions where later updates overwrite earlier ones.\n' +
        "- Your extension can't directly modify the discount method. The automatic vs. code setting is controlled by Shopify and only readable via `discounts.method.value`.\n" +
        '- Metafield changes are applied immediately. Unlike some admin forms, metafield changes persist right away without waiting for the merchant to save the discount.',
    },
  ],
};

export default data;
