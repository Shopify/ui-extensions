import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs.js';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptFooterBlockRender,
  description: `Renders a custom section within the POS receipt footer
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Receipt Footer Block',
      'targets',
      'pos-receipt-footer-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Block',
  isVisualComponent: false,
  related: [],
  type: 'Target',
  definitions: [CUSTOM_DATA('TransactionCompleteWithReprintData')],
};

export default data;
