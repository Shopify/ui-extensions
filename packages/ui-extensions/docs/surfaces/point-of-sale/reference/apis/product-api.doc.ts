import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForProductApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'product-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Product API',
  description:
    'The Product API provides an extension with data about the current Product.',
  isVisualComponent: false,
  type: 'APIs',
  requires:
    ExtensionTargetType.PosProductDetailsActionMenuItemRender ||
    ExtensionTargetType.PosProductDetailsActionRender,
  definitions: [
    {
      title: 'Product API',
      description: '',
      type: 'ProductApiContent',
    },
  ],
  examples: {
    description: 'Examples of using the Product API.',
    examples: [
      {
        codeblock: generateCodeBlockForProductApi(
          'Retreive the ID of the product.',
          'id',
        ),
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
