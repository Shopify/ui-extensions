import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs.js';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptHeaderBlockRender,
  description:
    'Renders a custom section in the header of printed receipts. Use this target for adding custom branding, logos, promotional messages, or store-specific information at the top of receipts.' +
    '\n\nExtensions at this target appear in the receipt header area and support limited components optimized for print formatting, including text content for information display.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a receipt header block',
      'targets',
      'pos-receipt-header-block-render',
    ),
    description:
      'Add a custom section to the header of printed receipts for branding or important information. This example shows how to create a header block that displays text content optimized for print formatting, useful for store branding, promotional messages, or important notices at the top of receipts.',
  },
  category: 'Targets',
  subCategory: 'Receipt',
  isVisualComponent: false,
  related: [],
  type: 'Target',
  definitions: [CUSTOM_DATA('TransactionCompleteWithReprintData')],
};

export default data;
