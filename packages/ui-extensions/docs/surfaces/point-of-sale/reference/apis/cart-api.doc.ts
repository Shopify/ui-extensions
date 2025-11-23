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
    description:
      'Learn how to manage cart state, modify line items, apply discounts, and handle customer information.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a custom sale item to the cart',
          'add-custom-sale',
        ),
        description:
          'Add a custom item to the cart with manual pricing and details. This example demonstrates using `shopify.cart.addCustomSale()` to create custom line items for services, fees, or items not in the product catalog, providing flexibility for unique sales scenarios.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a new address to the customer',
          'add-address',
        ),
        description:
          'Create a new address for the customer associated with the cart. This example demonstrates using `shopify.cart.addAddress()` to add shipping or billing addresses to customer profiles, streamlining future purchases and enabling multiple delivery locations.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a product variant to the cart',
          'add-line-item',
        ),
        description:
          'Add a product variant to the cart with specified quantity and optional properties. This example shows how to use `shopify.cart.addLineItem()` to add catalog items to the cart with custom attributes, enabling standard product sales with additional customization.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add a subscription plan to a line item',
          'add-line-item-selling-plan',
        ),
        description:
          'Associate a subscription or selling plan with a line item for recurring purchases. This example shows how to use `shopify.cart.addLineItemSellingPlan()` to add selling plans to items, enabling subscription-based sales and recurring revenue models.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to a line item',
          'add-line-item-properties',
        ),
        description:
          'Attach custom metadata to a specific line item for additional product information. This example shows how to use `shopify.cart.addLineItemProperties()` to add key-value properties to individual items, enabling customization like engraving text, gift messages, or special instructions.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add custom properties to the cart',
          'add-cart-properties',
        ),
        description:
          'Attach custom metadata to the cart for additional order information. This example shows how to use `shopify.cart.addCartProperties()` to add key-value properties that persist through checkout, useful for tracking order sources, preferences, or workflow data.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Add properties to multiple line items at once',
          'bulk-add-line-item-properties',
        ),
        description:
          'Attach custom metadata to multiple line items efficiently in a single operation. This example demonstrates using `shopify.cart.bulkAddLineItemProperties()` to add properties to several items simultaneously, improving performance for batch customization operations.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a cart-level discount',
          'apply-cart-discount',
        ),
        description:
          'Apply a custom discount to the entire cart using a fixed amount or percentage. This example shows how to use `shopify.cart.applyCartDiscount()` to add order-level discounts with custom reasons, useful for promotions, loyalty rewards, or staff discounts.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a discount code to the cart',
          'apply-cart-code-discount',
        ),
        description:
          'Apply a discount code to the cart for automatic discount validation and application. This example demonstrates using `shopify.cart.applyCodeDiscount()` to add discount codes that are validated against Shopify discount rules, enabling seamless promotional code redemption.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply a discount to a single line item',
          'set-line-item-discount',
        ),
        description:
          'Apply a custom discount to a specific line item in the cart. This example demonstrates using `shopify.cart.setLineItemDiscount()` to add item-level discounts with custom reasons, perfect for selective price adjustments or item-specific promotions.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Apply discounts to multiple line items at once',
          'bulk-set-line-item-discounts',
        ),
        description:
          'Apply discounts to multiple line items efficiently in a single operation. This example shows how to use `shopify.cart.bulkSetLineItemDiscounts()` to add discounts to several items simultaneously, improving performance for bulk pricing adjustments or category-wide promotions.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Associate a customer with the cart',
          'set-customer',
        ),
        description:
          'Assign a customer to the current cart for personalized pricing and order history. This example demonstrates using `shopify.cart.setCustomer()` to link a customer by ID, enabling customer-specific discounts, loyalty programs, and order tracking.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Attribute a line item to a staff member',
          'set-attributed-staff-to-line-item',
        ),
        description:
          'Associate a specific line item with a staff member for item-level commission tracking. This example shows how to use `shopify.cart.setAttributedStaffToLineItem()` to assign staff members to individual items, enabling granular sales attribution and performance analysis.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Attribute the cart to a staff member',
          'set-attributed-staff',
        ),
        description:
          'Associate a staff member with the cart for commission tracking and sales attribution. This example demonstrates using `shopify.cart.setAttributedStaff()` to assign staff members to sales, enabling performance tracking and commission calculations.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Check if the cart can be edited',
          'check-cart-editable',
        ),
        description:
          'Verify whether the cart is in an editable state before attempting modifications. This example demonstrates using `shopify.cart.editable` to check if the cart can accept changes, preventing errors and improving user experience by disabling actions when the cart is locked or in an immutable state.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Clear all items from the cart',
          'clear-cart',
        ),
        description:
          'Remove all line items and reset the cart to an empty state. This example shows how to use `shopify.cart.clear()` to completely clear the cart, useful for starting fresh transactions or implementing cart reset functionality.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Delete a customer address by ID',
          'delete-address',
        ),
        description:
          'Remove a specific address from the customer profile using its unique identifier. This example shows how to use `shopify.cart.deleteAddress()` to delete outdated or incorrect addresses, helping maintain clean customer records.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a discount from a line item',
          'remove-line-item-discount',
        ),
        description:
          'Remove a previously applied discount from a specific line item. This example demonstrates using `shopify.cart.removeLineItemDiscount()` to clear item-level discounts, useful for discount corrections or when promotional conditions are no longer met.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove all discounts from cart and line items',
          'remove-all-discounts',
        ),
        description:
          'Clear all discounts applied to both the cart and individual line items in a single operation. This example shows how to use `shopify.cart.removeAllDiscounts()` to reset pricing to base values, useful for recalculating totals or canceling promotional offers.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove an item from the cart',
          'remove-line-item',
        ),
        description:
          'Remove a specific line item from the cart using its unique identifier. This example demonstrates using `shopify.cart.removeLineItem()` to delete items, useful for implementing remove buttons, cart cleanup, or conditional item removal logic.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove custom properties from a line item',
          'remove-line-item-properties',
        ),
        description:
          'Delete specific custom properties from a line item by their keys. This example shows how to use `shopify.cart.removeLineItemProperties()` to clear item metadata, useful for removing temporary customization data or outdated property values.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove custom properties from the cart',
          'remove-cart-properties',
        ),
        description:
          'Delete specific custom properties from the cart by their keys. This example demonstrates using `shopify.cart.removeCartProperties()` to clear metadata, useful for cleaning up temporary data or removing properties that are no longer needed.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove a subscription plan from a line item',
          'remove-line-item-selling-plan',
        ),
        description:
          'Remove the selling plan from a line item to convert it back to a one-time purchase. This example demonstrates using `shopify.cart.removeLineItemSellingPlan()` to clear subscription plans, useful when customers change their mind about recurring orders.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Remove the customer from the cart',
          'remove-customer',
        ),
        description:
          'Disassociate the customer from the current cart for anonymous transactions. This example shows how to use `shopify.cart.removeCustomer()` to clear customer information, reverting to guest checkout pricing and removing customer-specific data from the cart.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Set the default address for the customer',
          'update-default-address',
        ),
        description:
          'Designate a specific address as the default for the customer. This example demonstrates using `shopify.cart.updateDefaultAddress()` to set the primary shipping or billing address, streamlining the checkout process for future transactions.',
      },
      {
        codeblock: generateJsxCodeBlockForCartApi(
          'Subscribe to real-time cart changes',
          'subscribe',
        ),
        description:
          'Monitor cart state changes in real time using the subscribe method. This example shows how to use `shopify.cart.subscribe()` to receive updates whenever the cart changes, enabling reactive UI updates, validation logic, or analytics tracking based on cart modifications.',
      },
    ],
  },
};

export default data;
