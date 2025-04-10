import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the cart line item details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Cart Line Item details action menu item',
      'targets',
      'pos-cart-line-item-details-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Cart line item details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-action-render',
    },
    {
      name: ExtensionTargetType.PosCartLineItemDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
