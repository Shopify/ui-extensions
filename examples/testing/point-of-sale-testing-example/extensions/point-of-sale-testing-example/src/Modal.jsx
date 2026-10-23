import {render} from 'preact';
import {useCapabilities} from './useCapabilities';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const signal = 'capabilities' in shopify ? shopify.capabilities : undefined;
  const capabilities = useCapabilities(signal);
  const requiresSetup =
    capabilities !== undefined && !capabilities.includes('block_progress');
  const cart = shopify.cart.current.value;
  const lineItems = cart ? cart.lineItems : [];

  return (
    <s-page heading="Cart details">
      <s-stack direction="block">
        {requiresSetup && (
          <s-banner heading="Enable checkout blocking" tone="warning">
            Open this extension in POS Editor and enable Allow app to block
            checkout. Ask a staff member who can edit POS settings if needed.
          </s-banner>
        )}
        {lineItems.length === 0 ? (
          <s-text>No items in cart</s-text>
        ) : (
          lineItems.map((item) => (
            <s-stack key={item.uuid} direction="inline">
              <s-text>{item.title}</s-text>
              <s-text>Qty: {item.quantity}</s-text>
            </s-stack>
          ))
        )}
      </s-stack>
    </s-page>
  );
}
