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
      title: 'Properties',
      description:
        'The `CartApi` object provides access to cart management and subscribable cart state. Access these properties through `api.cart` to build cart-aware extensions that respond to real-time cart updates.',
      type: 'CartApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  examples: {
    description:
      'Learn how to manage cart contents, apply discounts, handle customer information, and track cart changes in real time.',
    examples: [
      {
        codeblock: generateCodeBlockForCartApi(
          'Add a custom sale item to the cart',
          'add-custom-sale',
        ),
        description:
          "Create and add a custom sale item that isn't tied to an existing product in your catalog. This example demonstrates using `addCustomSale()` to add a line item with a custom title, quantity, price, and tax settings—useful for services, custom orders, or special charges.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add a new address to the customer',
          'add-address',
        ),
        description:
          "Create and add a new address to the customer associated with the cart. This example shows how to use `addAddress()` to add a complete address with street, city, province, name, and country information to the customer's profile for shipping or billing purposes.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add a product to the cart',
          'add-line-item',
        ),
        description:
          "Add a product to the cart by specifying its variant ID and quantity. This example uses `addLineItem()` to add a product variant with the specified quantity, returning the new line item's UUID for future reference or manipulation.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add custom properties to a line item',
          'add-line-item-properties',
        ),
        description:
          "Attach custom key-value metadata to a specific line item using its UUID. This example uses `addLineItemProperties()` to add an `'Engraving'` property to a particular line item, useful for storing item-specific customizations, notes, or tracking data.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add custom properties to multiple line items',
          'bulk-add-line-item-properties',
        ),
        description:
          'Attach different custom properties to multiple line items simultaneously in a single operation. This example shows how to use `bulkAddLineItemProperties()` to efficiently add unique engraving text to multiple items at once, reducing API calls and improving performance.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Add custom properties to the cart',
          'add-cart-properties',
        ),
        description:
          "Attach custom key-value metadata to the cart for tracking, integrations, or additional context. This example uses `addCartProperties()` to add an `'Engraving'` property to the cart, which merges with existing properties and overwrites duplicate keys.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Apply a discount code to the cart',
          'apply-cart-code-discount',
        ),
        description:
          "Add a discount to the cart using a discount code. This example shows how to apply the discount code `'SUMMER_2024'` using the `addCartCodeDiscount()` method, which validates and applies the code server-side if it's valid and applicable to the current cart.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Apply a discount to a line item',
          'set-line-item-discount',
        ),
        description:
          "Add a discount to an individual line item in the cart using its UUID. This example applies a 10% discount titled `'Summer discount'` to a specific line item using the `setLineItemDiscount()` method, allowing you to target discounts at particular products.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Apply a percentage discount to the cart',
          'apply-cart-discount',
        ),
        description:
          "Add a cart-level discount that applies to the total cart value. This example demonstrates applying a 10% discount titled `'Summer discount'` to the cart using the `applyCartDiscount()` method with the `Percentage` discount type.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Apply different discounts to multiple line items',
          'bulk-set-line-item-discounts',
        ),
        description:
          'Add discounts to multiple line items simultaneously using a single operation. This example shows how to use `bulkSetLineItemDiscounts()` to apply different discount types and amounts to multiple items efficiently—one gets a 10% percentage discount while another receives a $15 fixed amount discount.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Associate a customer with the cart',
          'set-customer',
        ),
        description:
          'Associate a customer with the cart using their ID to enable customer-specific features. This example shows how to use `setCustomer()` to associate a customer, which enables personalized pricing, applicable discounts, loyalty benefits, and streamlines the checkout process.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Attribute a staff member to a line item',
          'set-attributed-staff-to-line-item',
        ),
        description:
          'Assign a staff member to an individual line item for detailed sales tracking. This example demonstrates using `setAttributedStaffToLineItem()` to track which staff member was responsible for selling a specific item, enabling item-level commission tracking and performance analysis.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Attribute a staff member to the cart',
          'set-attributed-staff',
        ),
        description:
          'Assign a staff member to the cart for sales tracking and commission purposes. This example uses `setAttributedStaff()` with a staff member ID to track who facilitated or managed the sale, useful for performance metrics and incentive calculations.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Check if the cart is editable',
          'check-cart-editable',
        ),
        description:
          'Check whether the cart can be modified before attempting cart operations. This example demonstrates using `cart.editable` to verify editability, preventing errors from operations attempted on locked or finalized carts during payment processing or order completion.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Clear all items from the cart',
          'clear-cart',
        ),
        description:
          'Empty the cart completely, removing all line items, discounts, and properties. This example uses `clearCart()` to reset the cart to its initial empty state while preserving the customer association if present, useful for starting a new transaction or canceling a sale.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Delete a customer address',
          'delete-address',
        ),
        description:
          "Remove a specific address from the customer's profile using its ID. This example demonstrates using `deleteAddress()` to permanently delete an address from the customer associated with the cart, useful for cleaning up outdated or incorrect addresses.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Monitor cart updates in real time',
          'subscribable',
        ),
        description:
          'Subscribe to cart state changes to display dynamic information based on cart contents. This example shows how to react to cart updates and display the current number of line items in the cart, automatically updating the tile subtitle whenever the cart changes.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove a discount from a line item',
          'remove-line-item-discount',
        ),
        description:
          "Clear the discount from an individual line item while leaving other cart discounts intact. This example uses `removeLineItemDiscount()` with the line item's UUID to remove only that item's discount without affecting cart-level or other line item discounts.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove a line item from the cart',
          'remove-line-item',
        ),
        description:
          'Delete a line item from the cart using its UUID. This example demonstrates using `removeLineItem()` to completely remove a specific item along with any associated discounts or properties, without affecting other cart contents.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove all discounts from cart and line items',
          'remove-all-discounts',
        ),
        description:
          "Clear all discounts applied to both the cart and individual line items in a single operation. This example uses `removeAllDiscounts(true)` to remove all discounts and disable automatic discounts from being reapplied, giving you full control over the cart's discount state.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove custom properties from a line item',
          'remove-line-item-properties',
        ),
        description:
          "Delete specific properties from a line item by its UUID and property keys. This example demonstrates using `removeLineItemProperties()` to remove the `'Engraving'` property from a specific line item while preserving other line item properties and data.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove custom properties from the cart',
          'remove-cart-properties',
        ),
        description:
          "Delete specific cart properties by their keys while leaving other properties intact. This example demonstrates using `removeCartProperties()` to remove the `'Engraving'` property from the cart without affecting other custom properties or cart data.",
      },
      {
        codeblock: generateCodeBlockForCartApi(
          'Remove the customer from the cart',
          'remove-customer',
        ),
        description:
          'Disassociate the customer from the cart and convert it to a guest cart. This example uses `removeCustomer()` to remove customer-specific pricing, discounts, and personalization while preserving all cart contents and line items.',
      },
      {
        codeblock: generateCodeBlockForCartApi(
          "Set a customer's default address",
          'update-default-address',
        ),
        description:
          "Update which address is marked as the default for the customer in the cart. This example uses `updateDefaultAddress()` with an address ID to set the customer's primary address, which will be automatically selected for future transactions.",
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Validate operations before execution:** Check cart editability and validate input data before performing cart operations to prevent errors and provide appropriate user feedback.\n- **Use bulk operations for efficiency:** When performing multiple related operations, use bulk methods like \`bulkCartUpdate\`, \`bulkSetLineItemDiscounts\`, and \`bulkAddLineItemProperties\` for better performance.\n- **Handle errors gracefully:** Implement proper error handling for all cart operations, as they may fail due to inventory constraints, validation errors, or business rule violations.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- \`RemoteSubscribable\` supports only one subscription at a time. Use \`makeStatefulSubscribable\` if you need multiple components to subscribe to cart events simultaneously.\n- Cart operations may fail due to business rules, inventory constraints, or validation errors—always implement appropriate error handling.\n- Some operations require specific preconditions. For example, customer must be present for address operations.\n`,
    },
  ],
};

export default data;
