import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSReceiptBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-receipt-block', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSReceiptBlock',
  description:
    'The `POSReceiptBlock` component is part of the [POS UI extensions feature preview](/docs/api/feature-previews#pos-ui-extensions-preview). This feature preview is available on an invite-only basis and requires POS UI extensions version 2025-04 or 2025-07 and POS app version 9.31.0 or later.\n\nThe `POSReceiptBlock` component groups components together for display on POS receipts. Use it to display text and QR codes within receipt extensions, providing structured content for printed or digital receipts. The component handles edge cases and loading states gracefully, providing clear feedback during operations and maintaining interface responsiveness even when processing intensive tasks or handling large datasets.',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'pos-receipt-block-thumbnail.png',
  category: 'Components',
  related: [
    {
      name: 'Text',
      subtitle: 'Acceptable child components',
      type: 'apps',
      url: '/docs/api/pos-ui-extensions/components/text',
    },
    {
      name: 'QRCode',
      subtitle: 'Acceptable child components',
      type: 'apps',
      url: '/docs/api/pos-ui-extensions/components/qrcode',
    },
    {
      name: 'pos.receipt-footer.block.render',
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/receipts/pos-receipt-footer-block-render',
    },
  ],
  defaultExample: {
    image: 'pos-receipt-block-default.png',
    codeblock: generateCodeBlockForPOSReceiptBlock(
      'Add content to a receipt',
      'default.example',
    ),
    description:
      'Display custom content on POS receipts using a structured block container. This example shows how to group text and QR codes within receipt extensions, providing structured content for printed or digital receipts with proper formatting and layout.',
  },
};

export default data;
