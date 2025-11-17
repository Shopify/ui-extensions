import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from order details menu items. Use this target for complex order workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.',
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
