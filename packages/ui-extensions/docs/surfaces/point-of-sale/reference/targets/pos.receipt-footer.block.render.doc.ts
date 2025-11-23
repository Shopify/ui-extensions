import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs.js';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptFooterBlockRender,
  description:
    'Renders a custom section in the footer of printed receipts. Use this target for adding contact details, return policies, social media links, or customer engagement elements like survey links or marketing campaigns at the bottom of receipts.' +
    '\n\nExtensions at this target appear in the receipt footer area and support limited components optimized for print formatting, including text content for information display.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a receipt footer block',
      'targets',
      'pos-receipt-footer-block-render',
    ),
    description:
      'Add a custom section to the footer of printed receipts for contact information, policies, or marketing. This example shows how to create a footer block that displays text content optimized for print formatting, useful for return policies, social media links, or customer engagement elements.',
  },
  category: 'Targets',
  subCategory: 'Receipt',
  isVisualComponent: false,
  related: [],
  type: 'Target',
  definitions: [CUSTOM_DATA('TransactionCompleteWithReprintData')],
};

export default data;
