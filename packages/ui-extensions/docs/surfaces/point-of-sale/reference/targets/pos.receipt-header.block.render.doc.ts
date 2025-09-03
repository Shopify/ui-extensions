import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs.js';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptHeaderBlockRender,
  description: `Renders a custom section within the POS receipt header
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Receipt Header Block',
      'targets',
      'pos-receipt-header-block-render',
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
