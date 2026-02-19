import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';
// Allows the use of `shopify.cart.current.value` as a stateful subscription.
import '@shopify/ui-extensions/preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [isEditable, setIsEditable] = useState(
    shopify.cart.current.value.editable ?? true
  );

  useEffect(() => {
    const unsubscribe = shopify.cart.current.subscribe((newCart) => {
      setIsEditable(newCart.editable ?? true);
    });
    return unsubscribe;
  }, []);

  return (
    <s-tile
      heading="My App"
      disabled={!isEditable}
    />
  );
};