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
      'Menu item',
      'targets',
      'customer-details-menu-item',
    ),
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
      name: 'Customer API',
      url: '/docs/api/pos-ui-extensions/apis/customer-api',
    },
  ],
  type: 'Target',
};

export default data;
