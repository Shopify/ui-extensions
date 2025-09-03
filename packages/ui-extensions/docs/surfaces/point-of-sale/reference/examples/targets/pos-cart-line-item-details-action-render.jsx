import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="CartLineItemDetails">
      <s-screen name="CartLineItemDetails" title="Cart Line Item Details">
        <s-scroll-box>
          <s-text>Cart line item action extension</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
