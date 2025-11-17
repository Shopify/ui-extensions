import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the customer details action menu. Use this target for customer-specific operations like applying customer discounts, processing loyalty redemptions, or launching profile update workflows.' +
    '\n\nExtensions at this target can access the customer identifier through the Customer API to perform customer-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion modal for complete customer workflows.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Menu item',
      'targets',
      'customer-details-menu-item',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCustomerDetailsActionRender,
      url: 'pos-customer-details-action-render',
    },
    {
      name: ExtensionTargetType.PosCustomerDetailsBlockRender,
      url: '../block/pos-customer-details-block-render',
    },
    {
      name: 'Customer API',
      url: '../../apis/customer-api',
    },
  ],
  type: 'Target',
};

export default data;
