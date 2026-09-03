import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-tile
      heading="My App"
      subheading="Call cart function"
      onClick={() => {
        const [lineItem] = shopify.cart.current.value.lineItems;
        if (lineItem) {
          shopify.cart.updateLineItemQuantity(
            lineItem.uuid,
            lineItem.quantity + 1,
          );
        }
      }}
    />
  );
};
