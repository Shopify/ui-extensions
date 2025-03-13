import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<s-box padding="base">Box</s-box>, document.body);
}
