import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {TRANSACTION_COMPLETE_DEFINITION} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptFooterBlockRender,
  description: `Renders a custom section within the POS receipt footer
  > Note:
  > This is part of a [POS UI Extensions developer preview](/docs/api/developer-previews#pos-ui-extensions-developer-preview). More information to come.`,
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
