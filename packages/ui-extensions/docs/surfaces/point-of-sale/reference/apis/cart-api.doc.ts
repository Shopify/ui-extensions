import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {
  generateCodeBlock,
  generateJsxCodeBlock,
} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForCartApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'cart-api', fileName);

const generateJsxCodeBlockForCartApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'cart-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart API',
  description: `
The Cart API enables UI Extensions to manage and interact with POS cart contents, such as discounts, line items, and customer details. It provides a comprehensive set of functions for adding and removing items, alongside a subscribable object that keeps the UI Extension updated with real-time changes to the cart.

#### Supporting targets
- ${TargetLink.PosHomeTileRender}
- ${TargetLink.PosHomeModalRender}
- ${TargetLink.PosProductDetailsActionMenuItemRender}
- ${TargetLink.PosProductDetailsActionRender}
- ${TargetLink.PosCustomerDetailsActionMenuItemRender}
- ${TargetLink.PosCustomerDetailsActionRender}
- ${TargetLink.PosCustomerDetailsBlockRender}
- ${TargetLink.PosOrderDetailsActionMenuItemRender}
- ${TargetLink.PosOrderDetailsActionRender}
- ${TargetLink.PosOrderDetailsBlockRender}
- ${TargetLink.PosDraftOrderDetailsActionMenuItemRender}
- ${TargetLink.PosDraftOrderDetailsActionRender}
- ${TargetLink.PosDraftOrderDetailsBlockRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartApi',
      description: '',
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
      {
        codeblock: generateCodeBlockForCartApi(
          'Add a selling plan to a line item in the cart',
          'add-line-item-selling-plan',
        ),
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove a selling plan from a line item in the cart',
          'remove-line-item-selling-plan',
        ),
      },
    ],
  },
};

export default data;
