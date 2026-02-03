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
