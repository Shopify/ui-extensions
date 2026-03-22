import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const address = shopify.shippingAddress?.value;

  if (!address) {
    return (
      <s-text>
        No shipping address on file for this order.
      </s-text>
    );
  }

  return (
    <s-box>
      <s-text type="strong">{address.name}</s-text>
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
