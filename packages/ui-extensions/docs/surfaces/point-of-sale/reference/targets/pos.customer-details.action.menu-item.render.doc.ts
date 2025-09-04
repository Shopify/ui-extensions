import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the customer details screen',
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
