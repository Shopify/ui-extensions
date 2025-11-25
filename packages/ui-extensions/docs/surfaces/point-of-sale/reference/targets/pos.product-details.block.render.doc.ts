import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsBlockRender,
  description:
    'Renders a custom information section within the product details screen. Use this target for displaying supplementary product data like detailed specifications, inventory status, or related product recommendations alongside standard product details.' +
    '\n\nExtensions at this target appear as persistent blocks within the product details interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex product operations.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a product details information block',
      'targets',
      'pos-product-details-block-render',
    ),
    description:
      'Add a custom information section to the product details screen for displaying supplementary product data. This example shows how to create a block that provides additional product information, inventory status, or custom product attributes alongside standard product details.',
  },
  category: 'Targets',
  subCategory: 'Product details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
