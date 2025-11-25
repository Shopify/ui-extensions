import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the customer details action menu. Use this target for customer-specific operations like applying customer discounts, processing loyalty redemptions, or launching profile update workflows.' +
    '\n\nExtensions at this target can access the customer identifier through the Customer API to perform customer-specific operations. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete customer workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Show a customer action menu item',
      'targets',
      'customer-details-menu-item',
    ),
    description:
      'Create an action menu item on customer detail screens. This example demonstrates rendering a button in the customer action menu that launches customer-specific workflows like applying discounts, processing loyalty points, or updating customer profiles.',
  },
  category: 'Targets',
  subCategory: 'Customer details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
