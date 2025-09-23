import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading="Order Api">
      <s-scroll-box>
        <s-text>Order ID: {shopify.order.id}</s-text>
      </s-scroll-box>
    </s-page>
  );
};
