import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="ProductList" title="Product List">
            <s-list title="Products" data={listData} />
            {seeDetails && (
              <s-scroll-view>
                <s-section title="Our T-shirts">
                  <s-text>Our shirts are made with 100% organic cotton!</s-text>
                </s-section>
              </s-scroll-view>
            )}
          </s-screen>
        </s-navigator>
  );
}