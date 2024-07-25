import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the draft order details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Menu item',
      'targets',
      'pos-draft-order-details-action-menu-item',
    ),
  },
  category: 'Targets',
  subCategory: 'Draft order details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosDraftOrderDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-draft-order-details-action-render',
    },
    {
      name: ExtensionTargetType.PosDraftOrderDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-draft-order-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
