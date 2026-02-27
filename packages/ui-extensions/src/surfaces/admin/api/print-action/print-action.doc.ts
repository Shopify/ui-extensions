import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Print Action Extension API',
  description:
    'The Print Action Extension API lets you [build print action extensions](/docs/apps/build/admin/actions-blocks/build-admin-print-action) that generate custom printable documents for orders, products, and other resources. Use this API to create branded labels, packing slips, custom invoices, or specialty documents.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [admin print action](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/admin-print-action) component.',
  defaultExample: {
    description:
      "Generate a packing slip PDF for selected orders by calling your app's backend service. This example shows extracting order IDs from the selected resources, making an API call to your backend to generate the PDF, and returning the printable URL to display the document.",
    codeblock: {
      title: 'Generate packing slip',
      tabs: [
        {
          title: 'jsx',
          code: './examples/generate-packing-slip.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `PrintActionExtensionApi` object provides properties for print action extensions that generate custom printable documents. Access the following properties on the `PrintActionExtensionApi` object to access selected resources and display picker dialogs for print configuration.',
      type: 'PrintActionExtensionApi',
    },
  ],
  examples: {
    description: 'Generate custom printable documents',
    examples: [
      {
        description:
          'Generate product labels with an option to add additional products beyond the initial selection. This example demonstrates using the [resource picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) within a print action and tracking the additional product count.',
        codeblock: {
          title: 'Generate custom product labels',
          tabs: [
            {
              title: 'jsx',
              code: './examples/custom-product-labels.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Query order details using the [GraphQL Admin API](/docs/api/admin-graphql/) and then generate a shipping manifest PDF. This example shows fetching order data in `useEffect`, displaying the order list, and passing the data to your print service.',
        codeblock: {
          title: 'Generate shipping manifest',
          tabs: [
            {
              title: 'jsx',
              code: './examples/shipping-manifest.jsx',
              language: 'jsx',
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
        '- **Use `@media print` CSS for print-optimized styling:** Apply print-specific styles with `@media print` queries to control page breaks, hide UI elements, and optimize for paper output. The print preview shows the screen styles until printing.\n' +
        '- **Set document MIME type correctly:** Return `Content-Type: application/pdf` for PDFs, `image/png` for images, or `text/html` for HTML documents. Incorrect MIME types may cause browser download instead of preview.\n' +
        '- **Test `window.print()` behavior:** If generating HTML, test that `window.print()` works correctly. Some CSS frameworks or scripts may interfere with browser print dialogs.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Print action extensions must return a URL string. You can't render the print UI directly within the extension or control the print preview appearance.\n" +
        '- URLs must be publicly accessible with CORS headers allowing the Shopify admin origin. Authentication tokens in URLs can expire while merchants have the preview open.\n' +
        "- Extensions don't have access to printer settings. You can't configure print options like page orientation, margins, or paper size. Merchants control these through browser print dialogs.",
    },
  ],
};

export default data;
