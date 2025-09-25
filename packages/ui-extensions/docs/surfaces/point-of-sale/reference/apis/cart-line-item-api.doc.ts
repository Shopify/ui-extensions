import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForCartLineItemApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'cart-line-item-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Line Item API',
  description: `
The Cart Line Item API provides an extension with data about the current Cart Line Item.

#### Supporting targets
- ${TargetLink.PosCartLineItemDetailsActionMenuItemRender}
- ${TargetLink.PosCartLineItemDetailsActionRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartLineItemApi',
      description: '',
      type: 'CartLineItemApi',
    },
  ],
  examples: {
    description: 'Examples of using the Cart Line Item API.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCartLineItemApi(
          'Retrieve the ID of the cart line item.',
          'id',
        ),
      },
    ],
  },
  category: 'APIs',
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-action-render',
    },
  ],
};

export default data;
