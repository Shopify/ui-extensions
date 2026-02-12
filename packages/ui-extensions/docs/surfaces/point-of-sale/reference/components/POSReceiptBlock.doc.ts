import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSReceiptBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-receipt-block', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSReceiptBlock',
  description:
    'The POSReceiptBlock component is part of the [POS UI extensions feature preview](/docs/api/feature-previews#pos-ui-extensions-preview). This feature preview is available on an invite-only basis and requires POS UI extensions version 2025-04 or 2025-07 and POS app version 9.31.0 or later.\n\nThe POSReceiptBlock component groups components together for display on POS receipts. Use it to display text and QR codes within receipt extensions, providing structured content for printed or digital receipts. The component handles edge cases and loading states gracefully, providing clear feedback during operations and maintaining interface responsiveness even when processing intensive tasks or handling large datasets.',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'pos-receipt-block-thumbnail.png',
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  defaultExample: {
    image: 'pos-receipt-block-default.png',
    codeblock: generateCodeBlockForPOSReceiptBlock(
      'Add content to a receipt',
      'default.example',
    ),
    description:
      'Display custom content on POS receipts using a structured block container. This example shows how to group text and QR codes within receipt extensions, providing structured content for printed or digital receipts with proper formatting and layout.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Optimize text for receipt formatting:** When using Text components within POSReceiptBlock, choose content and formatting that works well in receipt layouts. Keep text concise and ensure it remains readable when printed on receipt paper.\n- **Design QR codes for easy scanning:** When including QR codes, ensure they encode useful information like store websites, feedback forms, or digital receipt access. Test QR code scanning in real-world conditions.\n- **Consider both digital and print contexts:** Design your receipt block content to work effectively in both digital receipt displays and physical printed receipts. Ensure text remains legible and QR codes remain scannable across both formats.\n- **Keep content focused and valuable:** Limit receipt block content to information that genuinely enhances the customer experience. Avoid cluttering receipts with excessive promotional content or information that isn't relevant to the transaction.\n- **Maintain consistent receipt branding:** Use POSReceiptBlock consistently across your extension to create cohesive receipt experiences. Establish patterns for how you present information that customers can recognize and trust.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- POSReceiptBlock only accepts Text and QRCode components as children—other component types aren't supported to ensure receipt formatting compatibility.\n- The component is designed specifically for receipt contexts—it can't be used in other POS UI extension targets or general interface layouts.\n- Content styling and layout are optimized for receipt formats—custom styling that might interfere with receipt printing or digital display is not supported.\n- Interactive elements beyond QR codes aren't supported—receipts are primarily informational documents rather than interactive interfaces.\n`,
    },
  ],
};

export default data;
