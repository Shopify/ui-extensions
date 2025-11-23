import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForProductApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'product-api', fileName);

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
        'The `ProductApi` object provides access to product data. Access this property through `api.product` to interact with the current product context.',
      type: 'ProductApiContent',
    },
  ],
  examples: {
    description:
      'Learn how to access product information and build contextual experiences based on product context.',
    examples: [
      {
        codeblock: generateCodeBlockForProductApi(
          'Get the current product ID',
          'id',
        ),
        description:
          "Retrieve the unique identifier of the product currently associated with the extension's context. This example shows how to access the product ID from product detail screens, enabling you to fetch additional product data, implement custom actions, or integrate with inventory and pricing systems.",
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
