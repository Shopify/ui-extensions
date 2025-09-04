import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="CustomerDetails">
      <s-screen name="CustomerDetails" title="Customer Details">
        <s-scroll-box>
          <s-text>Customer ID: {shopify.customer.id}</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
