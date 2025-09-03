import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="CustomerApi">
      <s-screen name="CustomerApi" title="Customer Api">
        <s-scroll-box>
          <s-text>Customer ID: {shopify.customer.id}</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
