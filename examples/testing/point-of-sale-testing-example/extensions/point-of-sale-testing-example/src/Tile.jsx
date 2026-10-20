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
      subheading={
        requiresSetup ? 'Checkout setup needed' : `${itemCount} item(s)`
      }
      onClick={handleClick}
    >
      <s-button onClick={handleAddQuantity}>Increment all quantities</s-button>
    </s-tile>
  );
}
