import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-stack direction="block" gap>
      Child 1 Child 2 Child 3 Child 4
    </s-stack>,
    document.body,
  );
}
