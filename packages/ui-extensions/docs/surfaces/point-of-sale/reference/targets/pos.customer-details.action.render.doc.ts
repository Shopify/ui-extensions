import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.customer-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Action',
      'targets',
      'customer-details-action',
    ),
  },
  category: 'Targets',
  subCategory: 'Customer details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-customer-details-action-menu-item-render',
    },
    {
      name: 'Customer API',
      url: '/docs/api/pos-ui-extensions/apis/customer-api',
    },
  ],
  type: 'Target',
};

export default data;
