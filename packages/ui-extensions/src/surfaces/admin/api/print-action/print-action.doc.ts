import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Print Action Extension API',
  description:
    'This API is available to all print action extension types. Note that the [`AdminPrintAction`](/docs/api/admin-extensions/polaris-web-components/other/adminprintaction) component is required to build admin print action extensions.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Generate a packing slip document for selected orders. Return a URL to the printable document that the admin can display in the print preview.',
    codeblock: {
      title: 'Generate packing slip',
      tabs: [
        {
          code: './examples/generate-packing-slip.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'PrintActionExtensionApi',
      description: '',
      type: 'PrintActionExtensionApi',
    },
  ],
  examples: {
    description: 'Generate custom printable documents',
    examples: [
      {
        description:
          'Generate custom product labels for selected products with the option to add more products using the resource picker. Use this to create barcode sheets, price tags, or specification labels.',
        codeblock: {
          title: 'Generate custom product labels',
          tabs: [
            {
              code: './examples/custom-product-labels.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Generate a shipping manifest with order details fetched from the [GraphQL Admin API](/docs/api/admin-graphql). Use this to create batch shipping documents with addresses and order information.',
        codeblock: {
          title: 'Generate shipping manifest',
          tabs: [
            {
              code: './examples/shipping-manifest.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
};

export default data;
