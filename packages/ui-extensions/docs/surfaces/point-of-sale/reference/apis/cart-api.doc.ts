import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForCartApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'cart-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart API',
  description:
    'The Cart API provides comprehensive access to POS cart management functionality, enabling extensions to read cart state, modify line items, apply discounts, manage customer information, and handle cart properties through a subscribable interface that delivers real-time updates. The API supports both individual and bulk operations for efficient cart manipulation.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartApi',
      description:
        'The `CartApi` object provides access to cart management methods and subscribable cart state. Access these methods through `api.cart` to build cart-aware extensions that respond to real-time cart updates.',
      type: 'CartApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Cart API',
    examples: [
      {
        codeblock: generateCodeBlockForCartApi(
          'Subscribe to cart changes.',
          'subscribable',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Apply a cart level discount',
          'apply-cart-discount',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Apply a cart level discount code',
          'apply-cart-code-discount',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove all the discounts on the cart and line items',
          'remove-all-discounts',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Set a custom discount on a line item',
          'set-line-item-discount',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Set a custom discount on multiple line items',
          'bulk-set-line-item-discounts',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove a discount on a line item',
          'remove-line-item-discount',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Clear the entire cart',
          'clear-cart',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Set the customer in the cart',
          'set-customer',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove the customer in the cart',
          'remove-customer',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add a custom sale to the cart',
          'add-custom-sale',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add a line item to the cart',
          'add-line-item',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove a line item from the cart',
          'remove-line-item',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add custom properties to the cart',
          'add-cart-properties',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove custom properties from the cart',
          'remove-cart-properties',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add custom properties to a line item',
          'add-line-item-properties',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add custom properties to multiple line items',
          'bulk-add-line-item-properties',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove custom properties from a line item',
          'remove-line-item-properties',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Set an attributed staff member on the cart',
          'set-attributed-staff',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Set an attributed staff member on a line item',
          'set-attributed-staff-to-line-item',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add an address to the customer in the cart',
          'add-address',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Delete an address corresponding to an ID',
          'delete-address',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Set the default address of the customer in the cart',
          'update-default-address',
        ),
      },
    ],
  },
};

export default data;
