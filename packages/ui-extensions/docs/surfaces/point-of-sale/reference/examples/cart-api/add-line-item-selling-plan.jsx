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
        shopify.cart.addLineItemSellingPlan({
          lineItemUuid: 'aa-1234567',
          sellingPlanId: 123,
          sellingPlanName: 'My Exclusive Subscription',
        });
      }}
    />
  );
};
