import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="ProductApi">
      <s-screen name="ProductApi" title="Product Api">
        <s-scroll-box>
          <s-text>Product ID: {shopify.product.id}</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
