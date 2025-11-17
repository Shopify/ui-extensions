import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsBlockRender,
  description:
    'Renders a custom information section within the order details screen. Use this target for displaying supplementary order data like fulfillment status, tracking numbers, or custom order analytics alongside standard order details.' +
    '\n\nExtensions at this target appear as persistent blocks within the order details interface and support interactive elements that can launch modal workflows using `api.action.presentModal()` for more complex order operations.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-order-details-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Order details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosOrderDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-order-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosOrderDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-order-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
