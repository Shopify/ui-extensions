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
      'Create an order details information block',
      'targets',
      'pos-order-details-block-render',
    ),
    description:
      'Add a custom information section to the order details screen for displaying supplementary order data. This example shows how to create a block that provides additional order information, tracking details, or order-specific status alongside standard order details.',
  },
  category: 'Targets',
  subCategory: 'Order details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
