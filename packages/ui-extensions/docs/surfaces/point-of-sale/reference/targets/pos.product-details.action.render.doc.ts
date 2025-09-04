import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.product-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Action',
      'targets',
      'product-details-action',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
      url: 'pos-product-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosProductDetailsBlockRender,
      url: 'pos-product-details-block-render',
    },
    {
      name: 'ProductAPI',
      url: '../../apis/product-api',
    },
  ],
  type: 'Target',
};

export default data;
