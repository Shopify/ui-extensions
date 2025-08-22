import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.cart.line-item-details.action.render` target calls for it',

  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-action-menu-item-render',
    },
  ],
  type: 'Target',
};

export default data;
