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
      'Create a customer details action menu item',
      'targets',
      'customer-details-menu-item',
    ),
    description:
      'Add an interactive menu item to the customer details action menu for customer-specific operations. This example shows how to create a menu item that accesses customer data and launches modal workflows for tasks like applying discounts, processing loyalty redemptions, or updating customer profiles.',
  },
  category: 'Targets',
  subCategory: 'Customer details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCustomerDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-customer-details-action-render',
    },
    {
      name: ExtensionTargetType.PosCustomerDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-customer-details-block-render',
    },
    {
      name: 'Customer API',
      url: '/docs/api/pos-ui-extensions/apis/customer-api',
    },
  ],
  type: 'Target',
};

export default data;
