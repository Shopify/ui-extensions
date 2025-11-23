import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsBlockRender,
  description:
    'Renders a custom information section within the draft order details screen. Use this target for displaying supplementary order information like processing status, payment status, or workflow indicators alongside standard draft order details.' +
    '\n\nExtensions at this target appear as persistent blocks within the draft order interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex draft order operations.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a draft order details information block',
      'targets',
      'pos-draft-order-details-block-render',
    ),
    description:
      'Add a custom information section to the draft order details screen for displaying supplementary draft order data. This example shows how to create a block that provides additional draft order information, payment status, or custom order notes alongside standard draft order details.',
  },
  category: 'Targets',
  subCategory: 'Draft order details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosDraftOrderDetailsActionMenuItemRender,
      url: '../action/pos-draft-order-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosDraftOrderDetailsActionRender,
      url: '../action/pos-draft-order-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
