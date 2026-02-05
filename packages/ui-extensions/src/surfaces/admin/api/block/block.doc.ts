import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Block Extension API',
  description:
    'The Block Extension API lets you [build block extensions](/docs/apps/build/admin/actions-blocks/build-admin-block) that display inline content directly within admin pages. Use this API to show contextual information, tools, or actions related to the current page without requiring merchants to open a modal.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminBlock`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminblock) component.',
  defaultExample: {
    description:
      "Fetch and display a product's title, inventory, and status to provide quick insights directly on the product details page. This example demonstrates querying the [GraphQL Admin API](/docs/api/admin-graphql/) when the extension loads, showing a loading [`Spinner`](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/spinner) while fetching, and rendering product information as [`Text`](/docs/api/admin-extensions/{API_VERSION}/components/typography/text) components.",
    codeblock: {
      title: 'Display product information',
      tabs: [
        {

          title: 'React',

          code: './examples/display-product-info.tsx',

          language: 'tsx',

        },

        {

          title: 'TS',

          code: './examples/display-product-info.ts',

          language: 'ts',

        },
      ],
    },
  },
  definitions: [
    {
      title: 'BlockExtensionApi',
      description:
        'The `BlockExtensionApi` object provides methods for block extensions that render inline content on admin pages. Access the following properties on the `BlockExtensionApi` object to interact with the current context, navigate to other extensions, and display picker dialogs.',
      type: 'BlockExtensionApi',
    },
  ],
  examples: {
    description: 'Common block extension patterns',
    examples: [
      {
        description:
          'Check product eligibility with your backend API before showing advanced workflow options to prevent invalid operations on incompatible products. This example demonstrates fetching eligibility status from your backend, displaying a loading [`Spinner`](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/spinner) during the check, and conditionally showing a navigation [`Button`](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) or ineligibility message.',
        codeblock: {
          title: 'Navigate to action extension',
          tabs: [
            {

              title: 'React',

              code: './examples/navigate-to-action.tsx',

              language: 'tsx',

            },

            {

              title: 'TS',

              code: './examples/navigate-to-action.ts',

              language: 'ts',

            },
          ],
        },
      },
      {
        description:
          'Open the [resource picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to select related products for recommendation features, cross-selling, or product associations. This example demonstrates launching the resource picker with filters for published products, saving the relationships to your backend, and displaying confirmation feedback showing the count of added products.',
        codeblock: {
          title: 'Select related products',
          tabs: [
            {

              title: 'React',

              code: './examples/select-related-products.tsx',

              language: 'tsx',

            },

            {

              title: 'TS',

              code: './examples/select-related-products.ts',

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
