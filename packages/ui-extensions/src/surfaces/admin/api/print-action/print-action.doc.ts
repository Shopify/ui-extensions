import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Print Action Extension API',
  description:
    'The Print Action Extension API lets you [build print action extensions](/docs/apps/build/admin/actions-blocks/build-admin-print-action) that generate custom printable documents for orders, products, and other resources. Use this API to create branded labels, packing slips, custom invoices, or specialty documents.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminPrintAction`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminprintaction) component.',
  definitions: [
    {
      title: 'PrintActionExtensionApi',
      description:
        'The `PrintActionExtensionApi` object provides methods for print action extensions that generate custom printable documents. Access the following properties on the `PrintActionExtensionApi` object to access selected resources and display picker dialogs for print configuration.',
      type: 'PrintActionExtensionApi',
    },
  ],
  defaultExample: {
    description:
      'Generate a packing slip PDF for selected orders. This example shows extracting order IDs from `data.selected`, calling your app backend to generate the PDF, and returning a printable URL.',
    codeblock: {
      title: 'Generate packing slip',
      tabs: [
        {code: './examples/generate-packing-slip.ts', language: 'ts'},
        {code: './examples/generate-packing-slip.tsx', language: 'tsx'},
      ],
    },
  },
  examples: {
    description: 'Generate custom printable documents',
    examples: [
      {
        description:
          'Generate product labels with the option to add products beyond the initial selection. This example demonstrates using `resourcePicker()` within a print action, combining initially selected products with newly picked ones, and sending all product IDs to your label generator.',
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
          'Query order details via GraphQL then generate a shipping manifest. Fetches order data including shipping addresses using the [GraphQL Admin API](/docs/api/admin-graphql) and passes the order information to your manifest generator.',
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
        '- **Set document MIME type correctly:** Return `Content-Type: application/pdf` for PDFs, `image/png` for images, or `text/html` for HTML documents. Incorrect MIME types might trigger browser download instead of preview.\n' +
        '- **Test `window.print()` behavior:** If generating HTML, then test that `window.print()` works correctly. Some CSS frameworks or scripts might interfere with browser print dialogs.',
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
