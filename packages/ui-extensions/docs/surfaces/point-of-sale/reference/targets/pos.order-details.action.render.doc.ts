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
  subCategory: 'Order details',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.order-details.action.menu-item.render',
      url: '/docs/api/pos-ui-extensions/targets/pos-order-details-action-menu-item-render',
    },
  ],
  type: 'Target',
};

export default data;
