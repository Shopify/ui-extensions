import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default function extension() {
  render(<SmartGridTile />, document.body);
}

function SmartGridTile() {
  const shouldDisable = (subtotal) => {
    return Number(subtotal) <= 100;
  };

  // [START tile.enable]
  const [disabled, setDisabled] = useState(
    shouldDisable(shopify.cart.current.value.subtotal),
  );
  // [END tile.enable]

  // [START tile.subscribe]
  useEffect(() => {
    const unsubscribe = shopify.cart.current.subscribe((cart) => {
      setDisabled(shouldDisable(cart.subtotal));
    });
    return unsubscribe;
  }, []);
  // [END tile.subscribe]

  return (
    <s-tile
      heading="Discount Example App"
      subheading="Preact"
      onClick={() => shopify.action.presentModal()}
      disabled={disabled}
    />
  );
}
