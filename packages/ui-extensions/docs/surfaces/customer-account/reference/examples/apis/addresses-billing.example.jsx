import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const address = shopify.billingAddress?.value;

  if (!address) {
    return (
      <s-banner tone="info">
        No billing address required for digital
        orders.
      </s-banner>
    );
  }

  return (
    <s-box>
      <s-text type="strong">Billing address</s-text>
      <s-text>{address.name}</s-text>
      <s-text>{address.address1}</s-text>
      {address.address2 && (
        <s-text>{address.address2}</s-text>
      )}
      <s-text>
        {address.city}, {address.zoneCode}{' '}
        {address.zip}
      </s-text>
      <s-text>{address.territoryCode}</s-text>
    </s-box>
  );
}
