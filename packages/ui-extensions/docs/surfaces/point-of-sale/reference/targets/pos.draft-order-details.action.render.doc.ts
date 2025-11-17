import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from draft order details menu items. Use this target for complex draft order workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to draft order data through the Draft Order API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Draft order details action',
      'targets',
      'pos-draft-order-details-action',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosDraftOrderDetailsActionMenuItemRender,
      url: 'pos-draft-order-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosDraftOrderDetailsBlockRender,
      url: '../block/pos-draft-order-details-block-render',
    },
    {
      name: 'Draft order details API',
      url: '../../apis/draft-order-api',
    },
  ],
  type: 'Target',
};

export default data;
