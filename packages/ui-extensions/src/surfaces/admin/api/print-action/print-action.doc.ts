import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Print Action Extension API',
  description:
    'The Print Action Extension API lets you [build print action extensions](/docs/apps/build/admin/actions-blocks/build-admin-print-action) that generate custom printable documents for orders, products, and other resources. Use this API to create branded labels, packing slips, custom invoices, or specialty documents.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminPrintAction`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminprintaction) component.',
  defaultExample: {
    description:
      "Generate a packing slip PDF for selected orders to provide warehouse staff with pick-and-pack instructions. This example demonstrates extracting order IDs from `data.selected`, posting them to your backend printing service, and returning the PDF URL for the print dialog.",
    codeblock: {
      title: 'Generate packing slip',
      tabs: [
        {code: './examples/generate-packing-slip.ts', language: 'ts'},
        {code: './examples/generate-packing-slip.tsx', language: 'tsx'},
      ],
    },
  },
  definitions: [
    {
      title: 'PrintActionExtensionApi',
      description:
        'The `PrintActionExtensionApi` object provides methods for print action extensions that generate custom printable documents. Access the following properties on the `PrintActionExtensionApi` object to access selected resources and display picker dialogs for print configuration.',
      type: 'PrintActionExtensionApi',
    },
  ],
  examples: {
    description: 'Generate custom printable documents',
    examples: [
      {
        description:
          'Generate custom product labels with the option to add more products beyond the initial selection for flexible batch labeling. This example demonstrates launching the [resource picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) from within a print action, tracking additional selections, and generating labels for the combined product set.',
        codeblock: {
          title: 'Generate custom product labels',
          tabs: [
        {code: './examples/custom-product-labels.ts', language: 'ts'},
        {code: './examples/custom-product-labels.tsx', language: 'tsx'},
      ],
        },
      },
      {
        description:
          'Query order details using the [GraphQL Admin API](/docs/api/admin-graphql/) to generate a shipping manifest PDF with addresses and order numbers for warehouse logistics. This example demonstrates fetching order shipping data, displaying the order list while generating the document, and posting the complete order information to your print service.',
        codeblock: {
          title: 'Generate shipping manifest',
          tabs: [
        {code: './examples/shipping-manifest.ts', language: 'ts'},
        {code: './examples/shipping-manifest.tsx', language: 'tsx'},
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
