import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForCartLineItemApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'cart-line-item-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Line Item API',
  description:
    'The Cart Line Item API provides read-only access to a specific line item in the cart. Use this API to get line item details like product information, pricing, discounts, and custom properties. This allows you to build features that respond to the specific item a customer is viewing or interacting with.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartLineItemApi',
      description:
        'The `CartLineItemApi` object provides access to the current line item. Access this property through `api.cartLineItem` to interact with the current line item context.',
      type: 'CartLineItemApi',
    },
  ],
  examples: {
    description:
      'Learn how to access line item information in cart line item action contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCartLineItemApi(
          'Display the line item ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current line item in a cart line item action context. This example shows how to use `shopify.cartLineItem.id` to retrieve the line item ID, which can be used for tracking, analytics, or performing operations on the specific item.',
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
