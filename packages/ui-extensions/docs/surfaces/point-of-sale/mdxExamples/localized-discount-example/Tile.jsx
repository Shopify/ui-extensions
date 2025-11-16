import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const {i18n} = shopify;
  
  const shouldDisable = (subtotal) => {
    return Number(subtotal) <= 100;
  };

  const [disabled, setDisabled] = useState(shouldDisable(shopify.cart.current.value.subtotal));
  
  useEffect(() => {
    const unsubscribe = shopify.cart.current.subscribe((cart) => {
      setDisabled(shouldDisable(cart.subtotal));
    });
    return unsubscribe;
  }, []);

  return (
    <s-tile
      heading={i18n.translate('name')}
      subheading={i18n.translate('availableDiscounts')}
      onClick={() => shopify.action.presentModal()}
      disabled={disabled}
    />
  );
}