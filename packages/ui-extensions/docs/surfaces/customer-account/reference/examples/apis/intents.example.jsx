import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  async function handleReplacePaymentMethod() {
    const activity = await shopify.intents.invoke(
      {
        action: 'open',
        type: 'shopify/SubscriptionContract',
        value:
          'gid://shopify/SubscriptionContract/123',
        data: {field: 'paymentMethod'},
      },
    );

    const response = await activity.complete;

    if (response.code === 'ok') {
      console.log(
        'Intent completed successfully',
        response.data,
      );
    }
  }

  return (
    <s-button
      onClick={handleReplacePaymentMethod}
    >
      Edit subscription payment method
    </s-button>
  );
}
