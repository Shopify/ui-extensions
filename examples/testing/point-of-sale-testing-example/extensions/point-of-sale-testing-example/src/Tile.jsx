import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const cart = shopify.cart.current.value;
  const lineItems = cart ? cart.lineItems : [];
  const itemCount = lineItems.length;

  function handleClick() {
    shopify.action.presentModal();
  }

  function handleAddQuantity() {
    shopify.cart.bulkCartUpdate({
      lineItems: lineItems.map((item) => ({
        ...item,
        quantity: item.quantity + 1,
      })),
      cartDiscounts: cart ? cart.cartDiscounts : [],
      properties: cart ? cart.properties : {},
    });
  }

  return (
    <s-tile
      heading="Cart summary"
      subheading={`${itemCount} item(s)`}
      onClick={handleClick}
    >
      <s-button onClick={handleAddQuantity}>Increment all quantities</s-button>
    </s-tile>
  );
}
