import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the order details action menu. Use this target for order-specific operations like reprints, refunds, exchanges, or launching fulfillment workflows.' +
    '\n\nExtensions at this target can access the order identifier through the Order API to perform order-specific operations. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete order workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Show an order action menu item',
      'targets',
      'pos-order-details-action-menu-item-render',
    ),
    description:
      'Create an action menu item on order detail screens. This example demonstrates rendering a button in the order action menu for operations like printing receipts, processing refunds, handling exchanges, or launching fulfillment workflows.',
  },
  category: 'Targets',
  subCategory: 'Order details',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.order-details.action.render',
      url: '/docs/api/pos-ui-extensions/targets/pos-order-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
