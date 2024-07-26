import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsBlockRender,
  description:
    'Renders a custom section within the native draft order details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-draft-order-details-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Draft order details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosDraftOrderDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-draft-order-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosDraftOrderDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-draft-order-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
