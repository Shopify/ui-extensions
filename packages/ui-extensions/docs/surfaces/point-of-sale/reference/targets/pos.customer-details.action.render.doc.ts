import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.customer-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Action',
      'targets',
      'customer-details-action',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
      url: 'pos-customer-details-action-menu-item-render',
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
