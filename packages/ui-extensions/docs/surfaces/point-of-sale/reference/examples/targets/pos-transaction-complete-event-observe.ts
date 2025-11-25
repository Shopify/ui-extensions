import {eventExtension} from '@shopify/ui-extensions/point-of-sale';

export default eventExtension(
  'pos.transaction-complete.event.observe',
  (eventData) => {
    // Access transaction data from the event
    const {transaction} = eventData;

    // Log completed transaction for analytics
    console.log('Transaction completed:', {
      type: transaction.transactionType,
      grandTotal: transaction.grandTotal.amount,
      itemCount: transaction.lineItems?.length || 0,
      hasCustomer: !!transaction.customer,
      executedAt: transaction.executedAt,
    });

    // Example: Trigger post-transaction workflow
    if (transaction.transactionType === 'Sale' && transaction.grandTotal.amount > 100) {
      console.log('High-value sale - send thank you email');
    }

    // Example: Update external analytics system
    // fetch('/api/analytics/transaction', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     transactionType: transaction.transactionType,
    //     grandTotal: transaction.grandTotal,
    //     lineItems: transaction.lineItems,
    //     executedAt: transaction.executedAt,
    //   }),
    // });

    // Return success (no errors)
    return {};
  },
);

