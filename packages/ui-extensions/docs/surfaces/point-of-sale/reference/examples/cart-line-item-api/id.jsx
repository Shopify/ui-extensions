import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading='Cart Line Item Details Action'>
      <s-scroll-box>
        <s-text>Cart Line Item ID: {shopify.cartLineItem.uuid}</s-text>
      </s-scroll-box>
    </s-page>
  );
};
