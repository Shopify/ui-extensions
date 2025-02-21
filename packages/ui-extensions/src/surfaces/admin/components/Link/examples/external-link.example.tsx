import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-link href="https://www.shopify.ca/climate/sustainability-fund">
      Sustainability fund
    </s-link>,
    document.body,
  );
}
