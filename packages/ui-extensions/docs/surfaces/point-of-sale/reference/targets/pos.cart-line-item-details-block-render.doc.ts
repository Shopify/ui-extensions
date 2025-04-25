import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsBlockRender,
  description:
    'Renders a custom section within cart manage line item details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-cart-line-item-details-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Cart line item details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
