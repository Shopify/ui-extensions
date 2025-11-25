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
      'Show a draft order action menu item',
      'targets',
      'pos-draft-order-details-action-menu-item',
    ),
    description:
      'Create an action menu item on draft order detail screens. This example demonstrates rendering a button in the draft order action menu for operations like sending invoices, updating payment status, or launching custom workflows for pending orders.',
  },
  category: 'Targets',
  subCategory: 'Draft order details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
