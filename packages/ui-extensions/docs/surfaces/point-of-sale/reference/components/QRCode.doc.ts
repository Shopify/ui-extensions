import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSReceiptBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'qrcode', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'QRCode',
  description: `A component that renders a QR code in Shopify POS.
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  requires: 'use within a `POSReceiptBlock` component',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'qrcode-thumbnail.png',
  definitions: [
    {
      title: 'QRCodeProps',
      description: '',
      type: 'QRCodeProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'POSReceiptBlock',
      subtitle: 'Required parent wrapper component',
      url: '/docs/api/pos-ui-extensions/components/posreceiptblock',
    },
  ],
  defaultExample: {
    codeblock: generateCodeBlockForPOSReceiptBlock(
      'Render a QRCode in POS receipts',
      'default.example',
    ),
  },
};

export default data;
