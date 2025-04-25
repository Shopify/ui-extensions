import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.cart.line-item-details.action.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Cart Line Item details action',
      'targets',
      'pos-cart-line-item-details-action-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Cart line item details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosCartLineItemDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
