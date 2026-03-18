import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Embed',
  description:
    'The embed component displays a preview of printable content from a specified source URL. Use it to show users what will be printed before triggering the actual print operation.\n\nEmbed works in conjunction with the Print API to provide complete print functionality from preview to execution.\n\nSupported document types:\n\n- **HTML documents** (`.html`, `.htm`) - Best printing experience with full CSS styling, embedded images, and complex layouts. Use for receipts, invoices, and formatted reports.\n\n- **Text files** (`.txt`, `.csv`) - Plain text with basic content and tabular data support. Use for simple receipts and data exports.\n\n- **PDF files** (`.pdf`) - Behavior varies by platform: prints directly on iOS/desktop, but downloads to external viewer on Android. Use for complex documents and compliance requirements.\n\n[Learn how to build a print extension in POS](/docs/apps/build/pos/build-print-extension).',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'embed-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the embed component. This component must be a direct child of the screen component.',
      type: 'EmbedProps',
    },
  ],
  category: 'Web components',
  subCategory: 'Media and visuals',
  related: [],
  defaultExample: {
    image: 'embed-default.png',
    description:
      'Display a preview of printable content before triggering the print operation. This example shows how to use embed with HTML documents, PDFs, or text files, supporting various document formats with proper rendering for receipts, invoices, and formatted reports.',
    codeblock: {
      title: 'Preview printable content',
      tabs: [{code: './examples/embed.html', language: 'html'}],
    },
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Design print-optimized content:** Structure your printable content with print-specific CSS media queries, appropriate page breaks, and formatting that works well on physical paper. Consider printer capabilities and paper sizes commonly used in POS environments.\n- **Implement proper error handling:** Handle cases where the source URL is unavailable, the document format is unsupported, or network issues prevent content loading. Provide clear feedback to users when preview or printing fails.\n- **Consider platform-specific limitations:** Be aware that PDF files on Android devices require external applications for printing. Design your workflow to handle this gracefully, potentially offering alternative formats or clear instructions for Android users.\n- **Optimize source URL management:** Use relative paths when possible for internal app resources to simplify URL management and improve performance. Reserve full URLs for external resources or when you need complete control over the endpoint.\n- **Provide clear print workflows:** Combine Embed with appropriate UI controls like print buttons, allowing users to review content before committing to print. Consider implementing print confirmation dialogs for important or expensive print operations.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Embed must be a direct child of the screen component and can't be nested inside any other component—this structural requirement ensures proper preview rendering and print functionality.\n- The component requires network access to fetch content from the specified source URL—offline functionality isn't supported for remote content.\n- Content is displayed as-is from the source—real-time content modification or editing within the preview isn't supported.\n- PDF printing on Android devices requires external applications—the component can't handle PDF printing natively on all platforms, which may affect user experience consistency across different POS devices.\n`,
    },
  ],
};

export default data;
