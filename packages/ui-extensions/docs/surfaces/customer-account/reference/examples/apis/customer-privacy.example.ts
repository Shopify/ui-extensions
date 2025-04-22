export default function extension() {
  const visitorConsent =
    shopify.customerPrivacy.current
      .visitorConsent || {};

  // Log initial consent values
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

  // Subscribe to consent changes
  shopify.customerPrivacy.subscribe(
    (updatedConsent) => {
      console.log(
        'analytics',
        updatedConsent.visitorConsent.analytics,
      );
      console.log(
        'marketing',
        updatedConsent.visitorConsent.marketing,
      );
      console.log(
        'preferences',
        updatedConsent.visitorConsent.preferences,
      );
      console.log(
        'saleOfData',
        updatedConsent.visitorConsent.saleOfData,
      );
    },
  );
}
