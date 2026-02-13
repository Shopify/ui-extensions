import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discount Function Settings API',
  description:
    'The Discount Function Settings API lets you build UI extensions that provide custom configuration interfaces for [discount functions](/docs/apps/build/discounts/build-ui-extension). Use this API to create settings pages for [Shopify Functions](/docs/apps/build/functions) that implement discount logic.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [FunctionSettings](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/functionsettings) component.',
  defaultExample: {
    description:
      'Save a minimum purchase threshold to a metafield with decimal number validation. This example uses a [text field](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) for input, calls `applyMetafieldChange`, and displays a success or error [banner](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/banner).',
    codeblock: {
      title: 'Configure discount threshold',
      tabs: [
        {
          title: 'React',
          code: './examples/configure-discount-threshold.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/configure-discount-threshold.ts',
          language: 'ts',
        },
      ],
    },
  },
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
  examples: {
    description: 'Configure discount function settings',
    examples: [
      {
        description:
          'Save multiple discount configuration settings in a single operation. This example stores customer tags as JSON and usage limits as an integer, demonstrating how to apply multiple metafield changes sequentially.',
        codeblock: {
          title: 'Configure eligibility rules',
          tabs: [
            {
              title: 'React',
              code: './examples/configure-eligibility-rules.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/configure-eligibility-rules.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Load discount metafields on mount and display current configuration. This example shows reducing metafields into a settings object, checking for missing values, and applying defaults only when needed.',
        codeblock: {
          title: 'Load existing settings',
          tabs: [
            {
              title: 'React',
              code: './examples/load-existing-settings.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/load-existing-settings.ts',
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
