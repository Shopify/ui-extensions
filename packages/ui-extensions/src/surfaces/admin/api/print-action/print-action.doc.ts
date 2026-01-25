import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Print Action Extension API',
  description:
    'The Print Action Extension API lets you [build print action extensions](/docs/apps/build/admin/actions-blocks/build-admin-print-action) that generate custom printable documents for orders, products, and other resources. Use this API to create branded labels, packing slips, custom invoices, or specialty documents.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminPrintAction`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/other/adminprintaction) component.',
  definitions: [
    {
      title: 'PrintActionExtensionApi',
      description:
        'The `PrintActionExtensionApi` object provides methods for print action extensions that generate custom printable documents. Access these properties through the API to access selected resources and display picker dialogs for print configuration.',
      type: 'PrintActionExtensionApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Return appropriate URLs:** Ensure the print URL returns a valid HTML, PDF, or image document that can be printed or displayed in the print preview.\n' +
        '- **Design for print media:** Use print-optimized layouts, appropriate page breaks, and printer-friendly styling in your generated documents.\n' +
        '- **Include relevant data:** Use the `api.data.selected` property to access resource IDs and include relevant information in the printed document.\n' +
        '- **Handle resource selection:** Use the [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to let merchants select additional resources to include in the print document.\n' +
        '- **Test across platforms:** Print rendering may vary across operating systems and browsers, so test your print output on different platforms.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Print action extensions must return a URL to a printable document.\n' +
        "- Direct print preview UI rendering and printer settings control aren't supported.",
    },
  ],
};

export default data;
