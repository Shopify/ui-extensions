import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the order details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Order details action menu item',
      'targets',
      'pos-order-details-action-menu-item-render',
    ),
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
