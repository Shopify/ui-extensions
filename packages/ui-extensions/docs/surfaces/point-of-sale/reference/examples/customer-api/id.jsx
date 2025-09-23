import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading='Customer Api'>
      <s-scroll-box>
        <s-text>Customer ID: {shopify.customer.id}</s-text>
      </s-scroll-box>
    </s-page>
  );
};
