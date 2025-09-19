import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.cart.line-item-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Action Render',
      'targets',
      'pos-cart-line-item-details-action-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
      url: 'pos-cart-line-item-details-action-menu-item-render',
    },
  ],
  type: 'Target',
};

export default data;
