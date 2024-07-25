import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the customer details screen',
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
