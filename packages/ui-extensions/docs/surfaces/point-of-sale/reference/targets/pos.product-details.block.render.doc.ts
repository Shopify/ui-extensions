import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsBlockRender,
  description:
    'Renders a custom information section within the product details screen. Use this target for displaying supplementary product data like detailed specifications, inventory status, or related product recommendations alongside standard product details.' +
    '\n\nExtensions at this target appear as persistent blocks within the product details interface and support interactive elements that can launch modal workflows using `api.action.presentModal()` for more complex product operations.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-product-details-block-render',
    ),
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
      name: ExtensionTargetType.PosProductDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-product-details-action-render',
    },
    {
      name: 'ProductAPI',
      url: '/docs/api/pos-ui-extensions/apis/product-api',
    },
  ],
  type: 'Target',
};

export default data;
