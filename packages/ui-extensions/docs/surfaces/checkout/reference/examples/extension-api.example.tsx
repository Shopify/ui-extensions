import {render} from 'preact';
import {useExtensionApi} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const {shop} = useExtensionApi();

  return <s-text>Shop name: {shop.name}</s-text>;
}
