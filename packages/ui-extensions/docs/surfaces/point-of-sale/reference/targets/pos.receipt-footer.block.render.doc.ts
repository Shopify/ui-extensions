import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptFooterBlockRender,
  description: 'Renders a custom section within the POS receipt footer',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-receipt-footer-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Receipts',
  isVisualComponent: false,
  related: [
    {
      name: 'Order API',
      url: '/docs/api/pos-ui-extensions/apis/order-api',
    },
    {
      name: 'POSReceiptBlock',
      url: '/docs/api/pos-ui-extensions/components/posreceiptblock',
    },
  ],
  type: 'Target',
};

export default data;
