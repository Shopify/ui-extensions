import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-box maxInlineSize={300}>
      <s-qrcode
        content="https://shopify.com"
        size="fill"
      />
    </s-box>,
    document.body,
  );
}
