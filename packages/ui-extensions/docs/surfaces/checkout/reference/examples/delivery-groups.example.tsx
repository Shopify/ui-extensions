import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const deliveryGroups =
    shopify.deliveryGroups.value;
  return (
    <s-banner>
      First delivery option:{' '}
      {deliveryGroups[0].deliveryOptions[0].title}
    </s-banner>
  );
}
