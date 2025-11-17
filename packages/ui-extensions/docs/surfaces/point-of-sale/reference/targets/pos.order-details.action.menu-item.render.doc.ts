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
