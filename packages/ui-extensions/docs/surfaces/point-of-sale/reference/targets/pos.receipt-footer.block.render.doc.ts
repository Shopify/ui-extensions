import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReceiptFooterBlockRender,
  description: 'Renders a custom section within the POS receipt footer',
  category: 'Targets',
  subCategory: 'Receipts',
  isVisualComponent: false,
  related: [
    {
      name: 'Order API',
      url: '/docs/api/pos-ui-extensions/apis/order-api',
    },
  ],
  type: 'Target',
};

export default data;
