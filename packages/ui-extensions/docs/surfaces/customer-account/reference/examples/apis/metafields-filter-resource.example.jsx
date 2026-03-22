import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const metafields =
    shopify.appMetafields.value;

  const productMetafields = metafields.filter(
    (entry) => entry.target.type === 'product',
  );
  const variantMetafields = metafields.filter(
    (entry) => entry.target.type === 'variant',
  );
  const shopMetafields = metafields.filter(
    (entry) => entry.target.type === 'shop',
  );

  return (
    <s-box>
      <s-text type="strong">
        Metafields by resource
      </s-text>
      <s-text>
        Products: {productMetafields.length}
      </s-text>
      <s-text>
        Variants: {variantMetafields.length}
      </s-text>
      <s-text>
        Shop: {shopMetafields.length}
      </s-text>
    </s-box>
  );
}
