import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const cart = shopify.cart.current.value;
  const lineItems = cart ? cart.lineItems : [];

  return (
    <s-page heading="Cart details">
      <s-stack direction="block">
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
