import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <>
      <s-qrcode
        content="https://shopify.com"
        logo="https://cdn.shopify.com/YOUR_IMAGE_HERE"
      />
      <s-paragraph>
        Scan to visit{' '}
        <s-link href="https://shopify.com">
          Shopify.com
        </s-link>
      </s-paragraph>
    </>,
    document.body,
  );
}
