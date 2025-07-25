import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSReceiptBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-receipt-block', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSReceiptBlock',
  description: `A component used to group other components together for display on POS receipts.
  > Note:
  > This is part of a [POS UI Extensions developer preview](/docs/api/developer-previews#pos-ui-extensions-developer-preview). More information to come.
  >
  > This component only accepts \`Text\` and \`QRCode\` components as children.`,
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
      'Render a POSReceiptBlock in POS receipts',
      'default.example',
    ),
  },
};

export default data;
