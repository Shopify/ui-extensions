import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForProductApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'product-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Product API',
  description: `
The Product API provides an extension with data about the current Product.

#### Supporting targets
- ${TargetLink.PosProductDetailsActionMenuItemRender}
- ${TargetLink.PosProductDetailsActionRender}
- ${TargetLink.PosProductDetailsBlockRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ProductApi',
      description: '',
      type: 'ProductApiContent',
    },
  ],
  examples: {
    description: 'Examples of using the Product API.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForProductApi(
          'Retrieve the ID of the product.',
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
