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
        shopify.cart.bulkSetLineItemDiscounts([
          {
            lineItemUuid: 'aa-1234567',
            type: 'Percentage',
            title: 'Summer discount',
            amount: '10',
          },
          {
            lineItemUuid: 'bb-7654321',
            type: 'FixedAmount',
            title: 'Loyalty discount',
            amount: '5',
          },
        ]);
      }}
    />
  );
};
