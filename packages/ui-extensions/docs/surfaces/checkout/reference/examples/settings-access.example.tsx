import {render} from 'preact';
import {useSettings} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {banner_title} = useSettings();
  return <s-banner>{banner_title}</s-banner>;
}
