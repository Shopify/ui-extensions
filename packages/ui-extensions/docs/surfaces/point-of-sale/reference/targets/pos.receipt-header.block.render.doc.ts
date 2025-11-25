import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptHeaderBlockRender,
  description:
    'Renders a custom section in the header of printed receipts. Use this target for adding custom branding, logos, promotional messages, or store-specific information at the top of receipts.' +
    '\n\nExtensions at this target appear in the receipt header area and support limited components optimized for print formatting, including text content for information display.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Add content to receipt header',
      'targets',
      'pos-receipt-header-block-render',
    ),
    description:
      'Display custom content in the header of printed receipts. This example shows how to create a header section with custom branding, logos, promotional messages, or store-specific information at the top of receipts, enhancing brand identity and providing important store information.',
  },
  category: 'Targets',
  subCategory: 'Receipts',
  isVisualComponent: false,
  related: [],
  type: 'Target',
  definitions: [CUSTOM_DATA('TransactionCompleteWithReprintData')],
};

export default data;
