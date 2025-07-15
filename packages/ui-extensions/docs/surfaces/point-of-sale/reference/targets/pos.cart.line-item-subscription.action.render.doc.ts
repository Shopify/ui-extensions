import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.cart.line-item-subscription.action.render',
  description:
    'A full-screen modal extension target for configuring subscriptions on cart line items',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Modal',
      'targets',
      'cart-subscription-modal',
    ),
  },
  category: 'Targets',
  subCategory: 'Cart line item',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.cart.line-item-subscription.action.menu-item.render',
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-subscription-action-menu-item-render',
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