import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForCartLineItemApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'cart-line-item-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Line Item API',
  description: `
The Cart Line Item API provides an extension with data about the current Cart Line Item.

#### Supporting targets
- ${TargetLink.PosCartLineItemDetailsActionMenuItemRender}
- ${TargetLink.PosCartLineItemDetailsActionRender}
- ${TargetLink.PosCartLineItemDetailsBlockRender}
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
        codeblock: generateCodeBlockForCartLineItemApi(
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
    {
      name: ExtensionTargetType.PosCartLineItemDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-block-render',
    },
  ],
};

export default data;
