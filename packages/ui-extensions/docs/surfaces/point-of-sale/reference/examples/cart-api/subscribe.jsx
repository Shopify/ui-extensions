import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';
// Allows the use of `shopify.cart.current.value` as a stateful subscription.
import '@shopify/ui-extensions/preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [lineItemCount, setLineItemCount] = useState(
    shopify.cart.current.value.lineItems.length
  );

  useEffect(() => {
    const unsubscribe = shopify.cart.current.subscribe((newCart) => {
      setLineItemCount(newCart.lineItems.length);
    });
    return unsubscribe;
  }, []);

  return (
    <s-tile
      heading="My App"
      subheading={`${lineItemCount} line items in cart`}
    />
  );
};
