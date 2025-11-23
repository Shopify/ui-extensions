import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForProductApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'product-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Product API',
  description:
    'The Product API provides read-only access to product data. Use this API to get product information and build contextual experiences based on the selected product context. The API offers product details for implementing product-specific functionality and workflows.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ProductApi',
      description:
        'The `ProductApi` object provides access to product data. Access this property through `shopify.product` to interact with the current product context.',
      type: 'ProductApiContent',
    },
  ],
  examples: {
    description:
      'Learn how to access product information in product detail contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForProductApi(
          'Display the product ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current product in a product detail action context. This example shows how to use `shopify.product.id` to retrieve the product ID, which can be used for fetching additional product data, analytics, or implementing product-specific features and workflows.',
      },
    ],
  },
  category: 'APIs',
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-product-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosProductDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-product-details-action-render',
    },
  ],
};

export default data;
