import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  /**
   * Available POS native screen uris:
   * - `shopify:point-of-sale/products/123` to present product details.
   * - `shopify:point-of-sale/products/123/variants/456` to present product variant details.
   * - `shopify:point-of-sale/customers/123` to present customer details.
   * - `shopify:point-of-sale/orders/123` to present order details.
   * - `shopify:point-of-sale/draft_orders/123` to present draft order details.
   * - `shopify:point-of-sale/staff/123` to present staff details.
   */
  const uri = `shopify:point-of-sale/products/${shopify.product.id}`;
  return (
    <s-page heading="POS native screen navigation">
      <s-scroll-box>
        <s-button
          onClick={() => {
            navigation.navigate(uri).catch(() => {
              // Due to staff permissions or POS subscription plan permission or invalid url, etc.
              shopify.toast.show('Unable to view product details.');
            });
          }}
        >
          View product details
        </s-button>
      </s-scroll-box>
    </s-page>
  );
}
