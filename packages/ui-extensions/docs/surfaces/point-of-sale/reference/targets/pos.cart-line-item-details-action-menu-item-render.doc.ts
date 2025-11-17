import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the cart line item action menu. Use this target for item-specific operations like applying discounts, adding custom properties, or launching verification workflows for individual cart items.' +
    '\n\nExtensions at this target can access detailed line item information including title, quantity, price, discounts, properties, and product metadata through the Cart Line Item API. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete workflows.',
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
  ],
  type: 'Target',
};

export default data;
