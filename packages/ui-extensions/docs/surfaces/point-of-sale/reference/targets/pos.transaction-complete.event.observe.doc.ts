import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {TRANSACTION_COMPLETE_DEFINITION} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosTransactionCompleteObserve,
  description:
    'Observes completed transactions including sales, returns, and exchanges, triggering when transactions are finalized. Use this target for post-transaction processing, analytics collection, and automated workflows that need to respond to completed sales activities.' +
    '\n\nExtensions at this target receive detailed transaction information including transaction type, totals, line items, and customer data when any transaction type is completed.',
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
