import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the order details action menu. Use this target for order-specific operations like reprints, refunds, exchanges, or launching fulfillment workflows.' +
    '\n\nExtensions at this target can access the order identifier through the Order API to perform order-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion modal for complete order workflows.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create an order details action menu item',
      'targets',
      'pos-order-details-action-menu-item-render',
    ),
    description:
      'Add an interactive menu item to the order details action menu for order-specific operations. This example shows how to create a menu item that accesses order data and launches modal workflows for tasks like reprints, refunds, exchanges, or fulfillment processes.',
  },
  category: 'Targets',
  subCategory: 'Order details',
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
