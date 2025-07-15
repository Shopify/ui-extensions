import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForCartLineItemApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'cart-line-item-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Line Item API',
  description: `
The Cart Line Item API provides an extension with data about the selected cart line item, including subscription/selling plan information.

#### Supporting targets
- ${TargetLink.PosCartLineItemDetailsActionMenuItemRender}
- ${TargetLink.PosCartLineItemDetailsActionRender}
- ${TargetLink.PosCartLineItemSubscriptionActionMenuItemRender}
- ${TargetLink.PosCartSubscriptionActionRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartLineItemApi',
      description: 'Access to the selected line item in the merchant\'s current cart. The line item includes enhanced selling plan properties.',
      type: 'CartLineItemApi',
    },
  ],
  examples: {
    description: 'Examples of using the Cart Line Item API.',
    examples: [
      {
        codeblock: generateCodeBlockForCartLineItemApi(
          'Access the cart line item data.',
          'cart-line-item',
        ),
      },
      {
        codeblock: generateCodeBlockForCartLineItemApi(
          'Check if line item has selling plans.',
          'has-selling-plans',
        ),
      },
      {
        codeblock: generateCodeBlockForCartLineItemApi(
          'Access current selling plan information.',
          'current-selling-plan',
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
      name: ExtensionTargetType.PosCartLineItemSubscriptionActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-subscription-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosCartSubscriptionActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-subscription-action-render',
    },
    {
      name: 'CartApi',
      url: '/docs/api/pos-ui-extensions/apis/cart-api',
    },
  ],
};

export default data;