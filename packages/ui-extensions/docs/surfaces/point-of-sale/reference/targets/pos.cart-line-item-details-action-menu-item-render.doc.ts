import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the cart line item details screen',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Action Menu Item',
      'targets',
      'pos-cart-line-item-details-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
      url: 'pos-cart-line-item-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
