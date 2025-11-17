import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the draft order details action menu. Use this target for draft order-specific operations like sending invoices, updating payment status, or launching custom workflow processes for pending orders.' +
    '\n\nExtensions at this target can access draft order information including order ID, name, and associated customer through the Draft Order API. Menu items typically invoke `shopify.action.presentModal()` to launch the companion modal for complete draft order workflows.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Menu item',
      'targets',
      'pos-draft-order-details-action-menu-item',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosDraftOrderDetailsActionRender,
      url: 'pos-draft-order-details-action-render',
    },
    {
      name: ExtensionTargetType.PosDraftOrderDetailsBlockRender,
      url: '../block/pos-draft-order-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
