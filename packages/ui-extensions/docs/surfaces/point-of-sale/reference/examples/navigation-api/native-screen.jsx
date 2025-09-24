import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const productUri = `shopify:point-of-sale/products/${shopify.product.id}/variants/${shopify.product.variantId}`;

  return (
    <s-page heading="Featured">
      <s-scroll-box>
        <s-button
          onClick={() => {
            navigation.navigate(productUri);
          }}
        >
          View featured product
        </s-button>
      </s-scroll-box>
    </s-page>
  );
}
