import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const shouldDisable = (subtotal) => {
    return Number(subtotal) < 100;
  };

  // You can use the current cart value to set up state
  const [disabled, setDisabled] = useState(
    shouldDisable(shopify.cart.current.value.subtotal),
  );

  // You can subscribe to changes in the cart to mutate state
  shopify.cart.current.subscribe((cart) => {
    setDisabled(shouldDisable(cart.subtotal));
  });

  return (
    <s-tile
      heading="Discount Example App"
      disabled={disabled}
      onClick={() => shopify.action.presentModal()}
    />
  );
};
