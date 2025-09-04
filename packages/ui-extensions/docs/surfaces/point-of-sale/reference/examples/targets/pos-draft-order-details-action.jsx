import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="DraftOrderDetailsAction">
      <s-screen name="DraftOrderDetailsAction" title="Draft Order Details Action">
        <s-scroll-box>
          <s-text>Order ID: {shopify.draftOrder.id}</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
