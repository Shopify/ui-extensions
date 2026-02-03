import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Block Extension API',
  description:
    'The Block Extension API lets you [build block extensions](/docs/apps/build/admin/actions-blocks/build-admin-block) that display inline content directly within admin pages. Use this API to show contextual information, tools, or actions related to the current page without requiring merchants to open a modal.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminBlock`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminblock) component.',
  definitions: [
    {
      title: 'BlockExtensionApi',
      description:
        'The `BlockExtensionApi` object provides methods for block extensions that render inline content on admin pages. Access the following properties on the `BlockExtensionApi` object to interact with the current context, navigate to other extensions, and display picker dialogs.',
      type: 'BlockExtensionApi',
    },
  ],
  defaultExample: {
    description:
      "Fetch and display a product's title, inventory, and status in a block extension. This example shows how to use `useEffect` to query the [GraphQL Admin API](/docs/api/admin-graphql) when the page loads, retrieving `title`, `totalInventory`, and `status` fields, while tracking loading state during the fetch operation.",
    codeblock: {
      title: 'Display product information',
      tabs: [
        {code: './examples/display-product-info.ts', language: 'ts'},
        {code: './examples/display-product-info.tsx', language: 'tsx'},
      ],
    },
  },
  examples: {
    description: 'Block extension patterns',
    examples: [
      {
        description:
          'Check product eligibility with your backend API before launching an action extension. This example demonstrates calling your backend eligibility endpoint with the product ID to validate that the product meets criteria, tracking the eligibility state, and using `navigation.navigate()` to open the action extension when the product is approved.',
        codeblock: {
          title: 'Navigate to action extension',
          tabs: [
            {code: './examples/navigate-to-action.ts', language: 'ts'},
            {code: './examples/navigate-to-action.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Open the resource picker to select related products, then save the associations to your backend. This example shows using `resourcePicker()` with `multiple: true` for unlimited selection, posting the relationship data to `/api/save-related`, and tracking the count of selected products.',
        codeblock: {
          title: 'Select related products',
          tabs: [
            {code: './examples/select-related-products.ts', language: 'ts'},
            {code: './examples/select-related-products.tsx', language: 'tsx'},
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
        '- **Test layouts at narrow widths:** Block extensions render in responsive containers that resize with browser width. Test down to ~300px where blocks stack vertically to ensure your UI remains usable.\n' +
        '- **Defer expensive operations until user interaction:** Blocks render immediately when pages load. Defer expensive operations until user interaction to avoid slowing down page rendering for merchants.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Block extensions share horizontal space with other blocks and must adapt to variable container widths. Placement order is determined by Shopify and can't be configured.\n" +
        "- Navigation is limited to action extensions on the same resource page. You can't navigate to detail pages of other resources or to index pages.\n" +
        "- Block extensions don't have access to information about other extensions on the page and can't communicate with them.",
    },
  ],
};

export default data;
