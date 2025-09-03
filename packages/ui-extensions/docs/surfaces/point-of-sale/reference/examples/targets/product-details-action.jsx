import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="ProductDetails">
      <s-screen name="ProductDetails" title="Product Details">
        <s-scroll-box>
          <s-text>Product ID: {shopify.product.id}</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
