import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {TRANSACTION_COMPLETE_DEFINITION} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosTransactionCompleteObserve,
  description:
    'Observes completed transactions including sales, returns, and exchanges, triggering when transactions are finalized. Use this target for post-transaction processing, analytics collection, and automated workflows that need to respond to completed sales activities.' +
    '\n\nExtensions at this target receive detailed transaction information including transaction type, totals, line items, and customer data when any transaction type is completed.',
  category: 'Targets',
  subCategory: 'Post-purchase',
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
  defaultExample: {
    codeblock: generateCodeBlock(
      'Process completed transactions',
      'targets',
      'pos-transaction-complete-event-observe',
    ),
    description:
      'Subscribe to transaction completion events to trigger post-sale workflows and analytics. This example demonstrates capturing completed sales, returns, and exchanges with detailed transaction data, enabling automated workflows like sending digital receipts, updating external systems, or collecting sales analytics.',
  },
};

export default data;
