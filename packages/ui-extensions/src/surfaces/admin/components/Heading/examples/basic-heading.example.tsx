import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<s-heading>Headings are cool</s-heading>, document.body);
}
