import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptHeaderBlockRender,
  description: `Renders a custom section within the POS receipt header
  > Note:
  > This is part of a [POS UI Extensions developer preview](/docs/api/developer-previews#pos-ui-extensions-developer-preview). More information to come. This target and \`transaction.lineItems.discounts.discountAllocations\` are available in POS 10.8 and later.`,
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-receipt-header-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Receipts',
  isVisualComponent: false,
  related: [
    {
      name: 'POSReceiptBlock',
      subtitle: 'Component',
      type: 'apps',
      url: '/docs/api/pos-ui-extensions/components/posreceiptblock',
    },
  ],
  type: 'Target',
  definitions: [CUSTOM_DATA('TransactionCompleteWithReprintData')],
};

export default data;
