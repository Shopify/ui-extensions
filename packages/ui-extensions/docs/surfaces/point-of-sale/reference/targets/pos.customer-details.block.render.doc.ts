import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsBlockRender,
  description:
    'Renders a custom information section within the customer details screen. Use this target for displaying supplementary customer data like loyalty status, points balance, or personalized information alongside standard customer details.' +
    '\n\nExtensions at this target appear as persistent blocks within the customer details interface and support interactive elements that can launch modal workflows using `api.action.presentModal()` for more complex customer operations.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Add a customer details block',
      'targets',
      'pos-customer-details-block-render',
    ),
    description:
      'Display custom information within the customer details screen as a persistent block. This example shows how to create blocks that show supplementary customer data like loyalty status, points balance, or personalized information with interactive elements that can launch modal workflows.',
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
      name: ExtensionTargetType.PosCustomerDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-customer-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
