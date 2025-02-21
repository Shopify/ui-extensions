import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-link href="shopify://admin/orders">Shop's orders</s-link>,
    document.body,
  );
}
