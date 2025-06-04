import {render} from 'preact';
import {useApi} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {shop} = useApi();

  return <s-text>Shop name: {shop.name}</s-text>;
}
