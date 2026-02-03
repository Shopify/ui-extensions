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
      "Uses `useEffect` to query the [GraphQL Admin API](/docs/api/admin-graphql) on page load, fetching the product's `title`, `totalInventory`, and `status` fields. The result is stored in state to display product data inline without leaving the page.",
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
          'Calls your backend eligibility endpoint with the product ID, then uses `navigation.navigate()` to open an action extension when `result.eligible` is true. For compliance workflows where products need validation before specific actions become available.',
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
          'Opens `resourcePicker()` with `multiple: true` for unlimited selection, then posts the selected IDs to `/api/save-related-products`. For "related products" or "frequently bought together" features where merchants build product associations.',
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
