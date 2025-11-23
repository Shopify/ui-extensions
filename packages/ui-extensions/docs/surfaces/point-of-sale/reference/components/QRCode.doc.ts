import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSReceiptBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'qrcode', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'QRCode',
  description:
    'The `QRCode` component renders a QR code for receipts in Shopify POS. Use QR codes to provide quick access to digital content, enable contactless interactions, or share information that customers and merchants can easily scan with mobile devices.\n\nThe component generates QR codes with customizable size and error correction levels, suitable for various use cases from customer-facing displays to inventory labels. It automatically handle encoding, scaling, and rendering optimizations to ensure reliable scanning across different lighting conditions and device cameras commonly found in retail environments.\n\nautomatically select appropriate error correction levels based on QR code content and intended display size, balancing scanability with data density for reliable reading across use cases.',
  requires: 'use within a `POSReceiptBlock` component',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'qrcode-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `QRCode` component.',
      type: 'QRCodeProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'POSReceiptBlock',
      subtitle: 'Required parent wrapper component',
      type: 'apps',
      url: '/docs/api/pos-ui-extensions/components/posreceiptblock',
    },
  ],
  defaultExample: {
    codeblock: generateCodeBlockForPOSReceiptBlock(
      'Display a QR code on a receipt',
      'default.example',
    ),
    description:
      'Render QR codes on receipts for quick access to digital content or contactless interactions. This example demonstrates generating QR codes with customizable size and error correction levels, enabling customers to easily scan information from printed or digital receipts.',
  },
};

export default data;
