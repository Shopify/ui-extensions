import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<s-link href="app://baz">Link to app path</s-link>, document.body);
}
