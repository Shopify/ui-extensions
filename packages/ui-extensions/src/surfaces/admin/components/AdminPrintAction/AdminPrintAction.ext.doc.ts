import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Admin print action',
  description:
    'The admin print action component specifies a URL for print operations in admin print action extensions. Use admin print action to define the print target when merchants trigger print actions from the Shopify admin, enabling custom print views optimized for physical or PDF printing.' +
    '\n\nLearn how to [build an admin print action extension](/docs/apps/build/admin/actions-blocks/build-admin-print-action).',
  requires:
    'the [Print Action Extension API](/docs/api/admin-extensions/{API_VERSION}/target-apis/core-apis/print-action-extension-api).',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminprintaction.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the admin print action component.',
      type: 'AdminPrintActionProps',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Settings and templates',
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use print-optimized URLs:** The URL should point to a page specifically designed for printing with print CSS stylesheets that hide navigation, adjust colors for readability, and set appropriate page dimensions.
- **Test across print scenarios:** Verify output when printing to PDF, physical printers, and different paper sizes. Test with both color and black-and-white settings.
- **Handle dynamic content:** If the print URL includes order-specific or time-sensitive data, ensure it's properly encoded in the URL parameters and accessible at print time.
- **Validate URL accessibility:** Ensure the print URL is accessible to merchants. Check authentication requirements and that the page loads successfully before printing.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Only HTML, PDFs, and common web image formats (JPEG, PNG, GIF, WebP) are supported for the print source URL.
- If the \`src\` property isn't provided, the preview will show an empty state and the print button will be disabled.`,
    },
  ],
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/components/adminprintaction-example.png',
    description:
      'Set the print source URL for an admin print action extension. This example shows the component pointing to an external URL for printing.',
    codeblock: {
      title: 'Set a print source URL',
      tabs: [
        {
          title: '',
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: '',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Point directly to a PDF file for printing invoices or receipts. This example sets the `src` to a PDF URL that the browser renders in the print preview.',
            codeblock: {
              title: 'Print a PDF document',
              tabs: [
                {
                  title: '',
                  code: './examples/pdf-source.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Build the print URL with query parameters to customize the output per order or template. This example passes order ID, template name, and locale as URL parameters.',
            codeblock: {
              title: 'Use a dynamic print URL',
              tabs: [
                {
                  title: '',
                  code: './examples/dynamic-url.html',
                  language: 'preview',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  related: [],
};

export default data;
