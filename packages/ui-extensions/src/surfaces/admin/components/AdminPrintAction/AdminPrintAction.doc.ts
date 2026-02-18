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
    codeblock: {
      title: 'Set the source URL of the print action extension.',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminPrintAction/examples/basic-adminprintaction.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-adminprintaction.example.ts',
          language: 'js',
        },
      ],
    },
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
