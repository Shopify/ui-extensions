import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsBlockRender,
  description:
    'Renders a custom section within the native order details screen',
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
