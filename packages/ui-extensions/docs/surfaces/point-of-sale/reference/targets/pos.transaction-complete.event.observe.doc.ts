import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {TRANSACTION_COMPLETE_DEFINITION} from '../helpers/helper.docs.js';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosTransactionCompleteObserve,
  description: `An event extension target that observes completed transactions
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Transaction Complete Observer',
      'targets',
      'pos-transaction-complete-event-observe',
    ),
  },
  category: 'Targets',
  subCategory: 'Observe',
  isVisualComponent: false,
  related: [],
  type: 'Target',
  ...TRANSACTION_COMPLETE_DEFINITION,
};

export default data;
