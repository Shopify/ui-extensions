import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostActionRender,
  description:
    'Renders a full-screen modal interface launched from post-purchase menu items. Use this target for complex post-purchase workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Action',
      'targets',
      'pos-purchase-post-action-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
      url: 'pos-purchase-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosPurchasePostBlockRender,
      url: '../block/pos-purchase-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
