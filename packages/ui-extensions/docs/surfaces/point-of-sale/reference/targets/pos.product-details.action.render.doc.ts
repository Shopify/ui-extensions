import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.product-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock('Action', 'targets', 'product-details-action'),
  },
  category: 'Targets',
  subCategory: 'Product details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-product-details-action-menu-item-render',
    },
    {
      name: 'ProductAPI',
      url: '/docs/api/pos-ui-extensions/apis/product-api',
    },
  ],
  type: 'Target',
};

export default data;
