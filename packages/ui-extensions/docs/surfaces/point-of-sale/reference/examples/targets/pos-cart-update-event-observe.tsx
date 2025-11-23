import {reactEventExtension} from '@shopify/ui-extensions-react/point-of-sale';

export default reactEventExtension(
  'pos.cart-update.event.observe',
  (eventData) => {
    // Access cart data from the event
    const {cart} = eventData;

    // Log cart changes for analytics or trigger workflows
    console.log('Cart updated:', {
      lineItemCount: cart.lineItems.length,
      grandTotal: cart.grandTotal,
      hasCustomer: !!cart.customer,
    });

    // Example: Trigger a workflow based on cart contents
    if (cart.lineItems.length > 5) {
      console.log('Large cart detected - consider bulk discount');
    }

    // Return success (no errors)
    return {};
  },
);

