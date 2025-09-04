import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the order details screen',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Order details action menu item',
      'targets',
      'pos-order-details-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosOrderDetailsActionRender,
      url: 'pos-order-details-action-render',
    },
    {
      name: ExtensionTargetType.PosOrderDetailsBlockRender,
      url: '../block/pos-order-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
