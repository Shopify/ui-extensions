import {render} from 'preact';
import {useCartLineTarget} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const {
    merchandise: {title},
  } = useCartLineTarget();
  return (
    <s-text>Line item title: {title}</s-text>
  );
}
