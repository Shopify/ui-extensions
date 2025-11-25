import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the draft order details action menu. Use this target for draft order-specific operations like sending invoices, updating payment status, or launching custom workflow processes for pending orders.' +
    '\n\nExtensions at this target can access draft order information including order ID, name, and associated customer through the Draft Order API. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete draft order workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a draft order details action menu item',
      'targets',
      'pos-draft-order-details-action-menu-item',
    ),
    description:
      'Add an interactive menu item to the draft order details action menu for draft order-specific operations. This example shows how to create a menu item that accesses draft order information and launches modal workflows for tasks like sending invoices, updating payment status, or custom order processes.',
  },
  category: 'Targets',
  subCategory: 'Draft order details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
