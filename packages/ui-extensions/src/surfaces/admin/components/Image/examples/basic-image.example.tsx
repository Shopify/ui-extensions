import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-stack gap="base">
      <s-box inlinesize="100px">
        <s-image
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-shopping-bag-full-color-66166b2e55d67988b56b4bd28b63c271e2b9713358cb723070a92bde17ad7d63.svg"
          alt="Pickaxe"
          inlinesize="fill"
        />
      </s-box>
      <s-box inlinesize="200px">
        <s-image
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-shopping-bag-full-color-66166b2e55d67988b56b4bd28b63c271e2b9713358cb723070a92bde17ad7d63.svg"
          alt="Pickaxe"
          inlinesize="fill"
        />
      </s-box>
    </s-stack>,
    document.body,
  );
}
