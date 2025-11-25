import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {TRANSACTION_COMPLETE_DEFINITION} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptFooterBlockRender,
  description:
    'Renders a custom section in the footer of printed receipts. Use this target for adding contact details, return policies, social media links, or customer engagement elements like survey links or marketing campaigns at the bottom of receipts.' +
    '\n\nExtensions at this target appear in the receipt footer area and support limited components optimized for print formatting, including text content for information display.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Add content to receipt footer',
      'targets',
      'pos-receipt-footer-block-render',
    ),
    description:
      'Display custom content in the footer of printed receipts. This example shows how to create a footer section with contact details, return policies, social media links, or customer engagement elements like survey links, providing additional context and marketing opportunities on receipts.',
  },
  category: 'Targets',
  subCategory: 'Receipts',
  isVisualComponent: false,
  related: [],
  type: 'Target',
  ...TRANSACTION_COMPLETE_DEFINITION,
};

export default data;
