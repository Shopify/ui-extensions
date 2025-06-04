import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default async () => {
  render(<App />, document.body);
}

function App() {
  const [visitorConsent, setVisitorConsent] =
    useState(
      shopify.customerPrivacy.current
        .visitorConsent || {},
    );

  useEffect(() => {
    shopify.customerPrivacy.subscribe(
      (updatedConsent) => {
        setVisitorConsent(
          updatedConsent.visitorConsent,
        );
      },
    );
  }, []);

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
