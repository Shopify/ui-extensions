import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const visitorConsent =
    shopify.customerPrivacy.value
      .visitorConsent || {};

  // Use consent values
  console.log(
    'analytics',
    visitorConsent.analytics,
  );
  console.log(
    'marketing',
    visitorConsent.marketing,
  );
  console.log(
    'preferences',
    visitorConsent.preferences,
  );
  console.log(
    'saleOfData',
    visitorConsent.saleOfData,
  );

  return null;
}
