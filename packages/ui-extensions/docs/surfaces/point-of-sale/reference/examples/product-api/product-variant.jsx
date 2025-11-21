import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const {id, variantId} = shopify.product;

  return (
    <s-page heading="Product & Variant">
      <s-scroll-box>
        <s-stack direction="block">
          <s-text>Product ID: {id}</s-text>
          <s-text>Variant ID: {variantId}</s-text>
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
};



