import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Action Extension API',
  description:
    'The Action Extension API lets you [build action extensions](/docs/apps/build/admin/actions-blocks/build-admin-action) that merchants access from the **More actions** menu on details and index pages. Use this API to create workflows for processing resources, configuring settings, or integrating with external systems.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [AdminAction](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminaction) component.',
  defaultExample: {
    description:
      'Send selected product IDs to your backend for bulk processing. This example shows how to map selected items, make an authenticated API call, and close the modal when the operation completes.',
    codeblock: {
      title: 'Process selected products',
      tabs: [
        {
          title: 'React',
          code: './examples/process-selected-products.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/process-selected-products.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ActionExtensionApi` object provides properties for action extensions that render in modal overlays. Access the following properties on the `ActionExtensionApi` object to interact with the current context, control the modal, and display picker dialogs.',
      type: 'ActionExtensionApi',
    },
  ],
  examples: {
    description:
      'Examples that demonstrate how to use the Action Extension API.',
    examples: [
      {
        description:
          'Launch the [resource picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to select component products for a [bundle](/docs/apps/build/product-merchandising/bundles), then save the bundle configuration to your backend. This example demonstrates opening a resource picker from within an action modal and handling the selection result.',
        codeblock: {
          title: 'Select additional resources',
          tabs: [
            {
              title: 'React',
              code: './examples/select-additional-resources.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/select-additional-resources.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Fulfill an order through your app backend with proper error handling. This example uses `try-catch` blocks to catch errors and displays error messages when your backend fulfillment service fails.',
        codeblock: {
          title: 'Fulfill order with error handling',
          tabs: [
            {
              title: 'React',
              code: './examples/handle-errors.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/handle-errors.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Check array length for bulk operations:** When actions appear on index pages with bulk selection, `api.data.selected` can contain multiple resources. Check the array length and handle batch operations accordingly.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Action extensions must call `api.close()` to dismiss the modal. Modal actions remain open indefinitely until explicitly closed.\n' +
        "- Modal overlays can't be resized. The modal dimensions are fixed by the Shopify admin.\n" +
        "- Action extensions can't modify the page layout underneath the modal or persist UI after closing.\n" +
        "- Multiple modals can't be stacked. Opening a [picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/picker-api) closes the current modal context temporarily.",
    },
  ],
};

export default data;
