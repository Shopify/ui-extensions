import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<s-badge tone="info">Fulfilled</s-badge>, document.body);
}
