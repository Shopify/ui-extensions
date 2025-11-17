import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {TargetLink} from '../types/ExtensionTargetType';

const generateJsxCodeBlockForCartApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'cart-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart API',
  description:
    'The Cart API provides comprehensive access to POS cart management functionality, enabling extensions to read cart state, modify line items, apply discounts, manage customer information, and handle cart properties. The API supports both individual and bulk operations for efficient cart manipulation, with [selling plan functionality](/docs/apps/build/purchase-options/subscriptions/selling-plans) and error handling.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartApi',
      description:
        'The `CartApi` object provides access to cart management functionality and real-time cart state monitoring. Access these properties through `shopify.cart` to interact with the current POS cart.',
      type: 'CartApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Cart API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Subscribe to cart changes.',
          'subscribe',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Check editable state of the cart',
          'check-cart-editable',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a cart level discount',
          'apply-cart-discount',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a cart level discount code',
          'apply-cart-code-discount',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove all the discounts on the cart and line items',
          'remove-all-discounts',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Set a custom discount on a line item',
          'set-line-item-discount',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Set a custom discount on multiple line items',
          'bulk-set-line-item-discounts',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a discount on a line item',
          'remove-line-item-discount',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Clear the entire cart',
          'clear-cart',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Set the customer in the cart',
          'set-customer',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove the customer in the cart',
          'remove-customer',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a custom sale to the cart',
          'add-custom-sale',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a line item to the cart',
          'add-line-item',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a line item from the cart',
          'remove-line-item',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to the cart',
          'add-cart-properties',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove custom properties from the cart',
          'remove-cart-properties',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to a line item',
          'add-line-item-properties',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to multiple line items',
          'bulk-add-line-item-properties',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove custom properties from a line item',
          'remove-line-item-properties',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Set an attributed staff member on the cart',
          'set-attributed-staff',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Set an attributed staff member on a line item',
          'set-attributed-staff-to-line-item',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add an address to the customer in the cart',
          'add-address',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Delete an address corresponding to an ID',
          'delete-address',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Set the default address of the customer in the cart',
          'update-default-address',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a selling plan to a line item in the cart',
          'add-line-item-selling-plan',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a selling plan from a line item in the cart',
          'remove-line-item-selling-plan',
        ),
      },
    ],
  },
};

export default data;
