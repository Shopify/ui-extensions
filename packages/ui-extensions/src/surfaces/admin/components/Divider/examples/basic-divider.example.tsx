import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <>
      First Text
      <s-divider />
      Second Text
    </>,
    document.body,
  );
}
