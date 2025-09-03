import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="PurchasePostAction">
      <s-screen name="PurchasePostAction" title="Purchase Post Action">
        <s-scroll-box>
          <s-text>Order ID: {shopify.order.id}</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
