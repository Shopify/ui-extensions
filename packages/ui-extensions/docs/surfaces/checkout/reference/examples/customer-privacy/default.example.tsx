import {useState} from 'react';
import {
  reactExtension,
  useCustomerPrivacy,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  // 2. Subscribe to customer privacy consent values
  const {
    visitorConsent: {
      analytics,
      marketing,
      preferences,
      saleOfData,
    },
  } = useCustomerPrivacy();

  // 3. Use consent values
  console.log('analytics', analytics);
  console.log('marketing', marketing);
  console.log('preferences', preferences);
  console.log('saleOfData', saleOfData);
}
