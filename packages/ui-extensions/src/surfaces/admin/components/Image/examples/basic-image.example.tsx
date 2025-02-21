import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-image
      alt="Pickaxe"
      src="https://shopify.dev/assets/icons/64/pickaxe-1.png"
    />,
    document.body,
  );
}
