import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {TRANSACTION_COMPLETE_DEFINITION} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosTransactionCompleteObserve,
  description: `An event extension target that observes completed transactions
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  category: 'Targets',
  subCategory: 'Post-transaction',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.receipt-footer.block.render',
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/receipts/pos-receipt-footer-block-render',
    },
    {
      name: 'POSReceiptBlock',
      subtitle: 'Component',
      type: 'apps',
      url: '/docs/api/pos-ui-extensions/components/posreceiptblock',
    },
  ],
  type: 'Target',
  ...TRANSACTION_COMPLETE_DEFINITION,
};

export default data;
