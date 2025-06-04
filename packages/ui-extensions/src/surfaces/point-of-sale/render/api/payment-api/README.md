# Payment API

The Payment API provides functionality for handling payment attempts and notifications in point-of-sale extensions.

## Features

- **Payment Processing**: Initiate payment attempts with callbacks for results
- **Status Tracking**: Monitor payment attempt status in real-time
- **Terminal Management**: Discover and manage payment terminals
- **Result Notifications**: Notify about payment results from external processors

## Usage

### Basic Payment Attempt

```typescript
import type {
  PaymentApi,
  PaymentAttemptOptions,
} from '@shopify/ui-extensions/point-of-sale';

export default function PaymentExtension(root, {payment}: PaymentApi) {
  async function processPayment() {
    const options: PaymentAttemptOptions = {
      payment: {
        amount: 1500, // $15.00 in cents
        currency: 'USD',
        type: 'CreditCard',
        description: 'Product purchase',
      },
      timeout: 30000, // 30 seconds
      requireConfirmation: true,
    };

    const attemptId = await payment.attemptPayment(options, (result) => {
      console.log('Payment result:', result);

      if (result.status === 'completed') {
        console.log(
          'Payment successful!',
          result.details?.transactionReference,
        );
      } else if (result.status === 'failed') {
        console.error('Payment failed:', result.details?.errorMessage);
      }
    });

    console.log('Payment attempt initiated:', attemptId);
  }
}
```

### Terminal Management

```typescript
export default function TerminalExtension(root, {payment}: PaymentApi) {
  async function setupTerminal() {
    // Get available terminals
    const terminals = await payment.getAvailableTerminals();
    console.log('Available terminals:', terminals);

    // Set preferred terminal
    if (terminals.length > 0) {
      await payment.setPreferredTerminal(terminals[0].id);
      console.log('Preferred terminal set:', terminals[0].name);
    }
  }
}
```

### Payment Status Monitoring

```typescript
export default function MonitoringExtension(root, {payment}: PaymentApi) {
  async function monitorPayment(attemptId: string) {
    const status = await payment.getPaymentAttemptStatus(attemptId);
    console.log('Current payment status:', status);

    // Cancel if needed
    if (status === 'pending') {
      await payment.cancelPaymentAttempt(attemptId);
      console.log('Payment cancelled');
    }
  }
}
```

### External Payment Processor Integration

```typescript
export default function ExternalProcessorExtension(
  root,
  {payment}: PaymentApi,
) {
  function handleExternalPaymentResult(externalResult: any) {
    // Notify the POS system about payment result from external processor
    payment.notifyPaymentResult({
      attemptId: externalResult.attemptId,
      payment: {
        amount: externalResult.amount,
        currency: externalResult.currency,
        type: 'StripeCreditCard',
        terminal: {
          id: externalResult.terminalId,
          name: 'Stripe Terminal',
          type: 'stripe_terminal',
          isOnline: true,
        },
      },
      status: externalResult.success ? 'completed' : 'failed',
      details: {
        transactionReference: externalResult.transactionId,
        errorMessage: externalResult.errorMessage,
        metadata: externalResult.metadata,
      },
      completedAt: new Date(),
    });
  }
}
```

## Types

### PaymentAttemptStatus

```typescript
type PaymentAttemptStatus =
  | 'pending' // Payment is waiting to be processed
  | 'processing' // Payment is currently being processed
  | 'completed' // Payment completed successfully
  | 'failed' // Payment failed
  | 'cancelled' // Payment was cancelled
  | 'timeout'; // Payment timed out
```

### PaymentAttemptResult

Contains the complete result of a payment attempt including status, payment details, and any error information.

### PaymentWithDetails

Extended payment information that includes terminal details, tip amounts, and customer-facing descriptions.

### PaymentTerminal

Information about payment terminals including their ID, name, type, and online status.

## Best Practices

1. **Error Handling**: Always handle payment failures gracefully and provide clear error messages
2. **Timeouts**: Set appropriate timeout values based on payment method and expected processing time
3. **Terminal Selection**: Check terminal availability before attempting payments
4. **Status Monitoring**: Monitor payment status for long-running transactions
5. **Security**: Never log sensitive payment information in production
