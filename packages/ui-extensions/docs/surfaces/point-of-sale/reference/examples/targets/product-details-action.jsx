import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading="Product Details">
      <s-scroll-box>
        <s-text>Product ID: {shopify.product.id}</s-text>
      </s-scroll-box>
    </s-page>
  );
};
