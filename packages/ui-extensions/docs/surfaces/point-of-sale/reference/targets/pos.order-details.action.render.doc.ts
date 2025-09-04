import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.order-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Order details action',
      'targets',
      'pos-order-details-action-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosOrderDetailsActionMenuItemRender,
      url: 'pos-order-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosOrderDetailsBlockRender,
      url: '../block/pos-order-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
