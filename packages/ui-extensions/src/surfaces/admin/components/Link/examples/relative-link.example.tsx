import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-link href="/baz">Link relative to current path</s-link>,
    document.body,
  );
}
