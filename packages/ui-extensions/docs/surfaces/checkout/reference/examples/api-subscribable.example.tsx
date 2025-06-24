import {render} from 'preact';
import {useNote} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const note = useNote();
  return <s-text>Note: {note}</s-text>;
}
