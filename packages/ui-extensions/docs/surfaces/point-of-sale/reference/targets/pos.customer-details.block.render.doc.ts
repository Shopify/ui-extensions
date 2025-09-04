import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsBlockRender,
  description: 'Renders a custom section within customer details screen',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Block',
      'targets',
      'pos-customer-details-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Block',
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
