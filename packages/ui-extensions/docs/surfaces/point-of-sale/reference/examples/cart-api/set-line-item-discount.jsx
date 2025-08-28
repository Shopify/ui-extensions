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
        shopify.cart.setLineItemDiscount(
          'aa-1234567',
          'Percentage',
          'Summer discount',
          '10',
        );
      }}
    />
  );
};
