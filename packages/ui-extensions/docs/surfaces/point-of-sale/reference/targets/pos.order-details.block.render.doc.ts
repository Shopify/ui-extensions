import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsBlockRender,
  description:
    'Renders a custom information section within the order details screen. Use this target for displaying supplementary order data like fulfillment status, tracking numbers, or custom order analytics alongside standard order details.' +
    '\n\nExtensions at this target appear as persistent blocks within the order details interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex order operations.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Block',
      'targets',
      'pos-order-details-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Block',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosOrderDetailsActionMenuItemRender,
      url: '../action/pos-order-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosOrderDetailsActionRender,
      url: '../action/pos-order-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
