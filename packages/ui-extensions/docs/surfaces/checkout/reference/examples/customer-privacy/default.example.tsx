import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {
    analytics,
    marketing,
    preferences,
    saleOfData,
  } =
    shopify.customerPrivacy.value.visitorConsent;

  console.log('analytics', analytics);
  console.log('marketing', marketing);
  console.log('preferences', preferences);
  console.log('saleOfData', saleOfData);
}
