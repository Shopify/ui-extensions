import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForCartLineItemApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'cart-line-item-api', fileName);

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
        'The `CartLineItemApi` object provides access to line item data. Access this through `api.lineItem` to retrieve information about the specific cart line item in context.',
      type: 'CartLineItemApi',
    },
  ],
  examples: {
    description:
      'Learn how to access line item information and build contextual experiences based on specific cart items.',
    examples: [
      {
        codeblock: generateCodeBlockForCartLineItemApi(
          'Get the current line item ID',
          'id',
        ),
        description:
          "Retrieve the unique identifier of the cart line item currently associated with the extension's context. This example shows how to access the line item ID from line item detail screens, enabling you to fetch additional item data, implement custom actions, or track item-specific operations.",
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
