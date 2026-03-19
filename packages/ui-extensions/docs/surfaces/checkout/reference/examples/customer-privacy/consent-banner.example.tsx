import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useCustomerPrivacy} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const customerPrivacy = useCustomerPrivacy();

  const {analytics, marketing} =
    customerPrivacy.visitorConsent;

  if (
    analytics === undefined ||
    marketing === undefined
  ) {
    return (
      <s-banner heading="Cookie preferences">
        We use cookies to improve your experience.
        Update your preferences in your browser
        settings.
      </s-banner>
    );
  }

  return null;
}
