import {render} from 'preact';
import {useCustomerPrivacy} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  // 1. Subscribe to customer privacy consent values
  const {
    visitorConsent: {
      analytics,
      marketing,
      preferences,
      saleOfData,
    },
  } = useCustomerPrivacy();

  // 2. Use consent values
  console.log('analytics', analytics);
  console.log('marketing', marketing);
  console.log('preferences', preferences);
  console.log('saleOfData', saleOfData);
}
