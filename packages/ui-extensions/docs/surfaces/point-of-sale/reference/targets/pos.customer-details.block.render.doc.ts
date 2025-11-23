import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsBlockRender,
  description:
    'Renders a custom information section within the customer details screen. Use this target for displaying supplementary customer data like loyalty status, points balance, or personalized information alongside standard customer details.' +
    '\n\nExtensions at this target appear as persistent blocks within the customer details interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex customer operations.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a customer details information block',
      'targets',
      'pos-customer-details-block-render',
    ),
    description:
      'Add a custom information section to the customer details screen for displaying supplementary customer data. This example shows how to create a block that shows loyalty status, points balance, or personalized information alongside standard customer details.',
  },
  category: 'Targets',
  subCategory: 'Customer details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
      url: '../action/pos-customer-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosCustomerDetailsActionRender,
      url: '../action/pos-customer-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
