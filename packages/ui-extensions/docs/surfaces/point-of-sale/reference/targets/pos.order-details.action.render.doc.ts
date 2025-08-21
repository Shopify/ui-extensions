import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.order-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock(
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
      url: '/docs/api/pos-ui-extensions/targets/pos-order-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosOrderDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-order-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
