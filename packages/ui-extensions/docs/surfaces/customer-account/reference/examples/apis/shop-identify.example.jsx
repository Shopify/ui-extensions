// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const shop = shopify.shop.value;
  const [status, setStatus] = useState('idle');

  async function syncWithBackend() {
    if (!shop) return;

    setStatus('syncing');
    try {
      await fetch('https://my-app.example.com/api/sync', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({shop: shop.myshopifyDomain}),
      });
      setStatus('synced');
    } catch {
      setStatus('error');
    }
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">Loyalty Program</s-text>
        <s-text color="subdued">
          Store: {shop.myshopifyDomain}
        </s-text>
        <s-button
          disabled={status === 'syncing'}
          onClick={syncWithBackend}
        >
          {status === 'syncing'
            ? 'Syncing…'
            : status === 'synced'
              ? 'Synced ✓'
              : 'Sync Account'}
        </s-button>
        {status === 'error' && (
          <s-banner tone="critical">
            Sync failed. Please try again.
          </s-banner>
        )}
      </s-stack>
    </s-box>
  );
}
