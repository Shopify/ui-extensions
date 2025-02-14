import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSReceiptBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-receipt-block', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSReceiptBlock',
  description: `A component used to group other components together for display on POS receipts.
  > Note:
  > This component only accepts \`Text\` and \`Image\` components as children.`,
  isVisualComponent: true,
  type: 'component',
  // eslint-disable-next-line no-warning-comments
  // TODO: add images (and update description, examples, types, related) after determining what child components are allowed.
  // thumbnail: 'pos-receipt-block-thumbnail.png',
  definitions: [
    {
      title: 'POSReceiptBlock',
      description: '',
      type: 'POSReceiptBlockProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'Text',
      url: '/docs/api/pos-ui-extensions/components/text',
    },
    {
      name: 'Image',
      url: '/docs/api/pos-ui-extensions/components/image',
    },
  ],
  defaultExample: {
    // image: 'pos-receipt-block-default.png',
    codeblock: generateCodeBlockForPOSReceiptBlock(
      'Render a POSReceiptBlock in POS receipts',
      'default.example',
    ),
  },
};

export default data;
