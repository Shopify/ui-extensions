import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminPrintAction',
  description:
    'The AdminPrintAction component specifies a URL for print operations in admin print action extensions. Use AdminPrintAction to define the print target when merchants trigger print actions from the Shopify admin, enabling custom print views optimized for physical or PDF printing.\n\nLearn how to [build an admin print action extension](/docs/apps/build/admin/actions-blocks/build-admin-print-action).',
  requires:
    'the [Print Action Extension API](/docs/api/admin-extensions/{API_VERSION}/target-apis/core-apis/print-action-extension-api).',
  thumbnail: 'adminprintaction-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the AdminPrintAction component.',
      type: 'AdminPrintActionProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Settings and templates',
  defaultExample: {
    image: 'adminprintaction-default.png',
    description:
      'Generate a printable document from a product details page. This example configures an `AdminPrintAction` with a `src` prop that builds a packing slip URL from the selected product ID, and shows a status message while the document loads.',
    codeblock: {
      title: 'Generate product packing slip',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminPrintAction/examples/basic-adminprintaction.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-adminprintaction.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          "Print a shipping label by passing format parameters in the `src` URL query string. This example constructs a URL with the product's numeric ID and a `4x6` format parameter, letting your print endpoint generate labels in the correct dimensions.",
        codeblock: {
          title: 'Print formatted shipping label',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminPrintAction/examples/adminprintaction-label.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/adminprintaction-label.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Show a [ProgressIndicator](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/progressindicator) while your app generates a complex wholesale invoice. This example displays a spinner alongside a status message while the `src` endpoint prepares the invoice document with pricing and tax details.',
        codeblock: {
          title: 'Generate wholesale invoice with loading',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminPrintAction/examples/adminprintaction-invoice.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/adminprintaction-invoice.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Optimize content for print:** Design the content at the source URL with print in mind. Use appropriate page sizes, avoid interactive elements, and ensure text is readable when printed.
- **Ensure fast response times:** The print preview loads synchronously, so the source URL should respond quickly to avoid a slow merchant experience.
- **Serve publicly accessible content:** The source URL must be accessible without authentication from the merchant's browser. Private or authenticated endpoints won't load in the print preview.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The print dialog, preview rendering, and print behavior are all controlled by the Shopify admin and can't be customized.
- This component doesn't support custom print headers, footers, or page size configuration. The print layout depends on the content served by the source URL and the merchant's browser print settings.`,
    },
  ],
  related: [],
};

export default data;
