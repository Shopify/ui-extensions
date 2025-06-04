import {render} from 'preact';
import {usePickupLocationOptionTarget} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const {
    isTargetSelected,
    pickupLocationOptionTarget,
  } = usePickupLocationOptionTarget();

  const title = pickupLocationOptionTarget?.title;

  if (isTargetSelected) {
    return <s-text>{title}</s-text>;
  }

  return null;
}
