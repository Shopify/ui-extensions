import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<s-icon type="apps" />, document.body);
}
