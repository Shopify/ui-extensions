import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.cart.line-item-subscription.action.menu-item.render',
  description:
    'A static extension target that renders as a menu item for managing subscriptions on cart line items',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Menu item',
      'targets',
      'cart-line-item-subscription-menu-item',
    ),
  },
  category: 'Targets',
  subCategory: 'Cart line item',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.cart.line-item-subscription.action.render',
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-subscription-action-render',
    },
    {
      name: 'CartLineItemApi',
      url: '/docs/api/pos-ui-extensions/apis/cart-line-item-api',
    },
    {
      name: 'CartApi',
      url: '/docs/api/pos-ui-extensions/apis/cart-api',
    },
  ],
  type: 'Target',
};

export default data;