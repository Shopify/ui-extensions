import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading='Draft Order Details Action'>
      <s-scroll-box>
        <s-text>Order ID: {shopify.draftOrder.id}</s-text>
      </s-scroll-box>
    </s-page>
  );
};
