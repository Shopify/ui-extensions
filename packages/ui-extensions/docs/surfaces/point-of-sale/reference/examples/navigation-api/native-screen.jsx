import { render } from "preact";

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
  return (
    <s-page heading="POS native screen navigation">
      <s-scroll-box>
        <s-button
          onClick={() => {
            // Use the navigate API to open a POS native resource details screen.
            // A permissions dialog will block navigation if they do not have the staff permissions to view the screen.
            navigation.navigate('shopify:point-of-sale/orders/123');
          }}
        >
          View order
        </s-button>
      </s-scroll-box>
    </s-page>
  );
}
