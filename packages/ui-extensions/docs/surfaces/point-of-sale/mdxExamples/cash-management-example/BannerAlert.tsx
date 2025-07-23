import React, {useState, useEffect} from 'react';

import {
  reactExtension,
  Banner,
  useApi,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';
import {useBusinessRules} from './useBusinessRules';

// [START banner-alert.component]
// 2. Implement the `BannerAlert` component
const BannerAlert = () => {
  // [END banner-alert.component]

  // [START banner-alert.api]
  // 3. Setup the api
  const api = useApi<'pos.cash-session-details.banner.render'>();
  // [END banner-alert.api]

  // [START banner-alert.use-business-rules]
  // 4. Check if any business rules are violated using the useBusinessRules hook
  const [deviceId, setDeviceId] = useState<string>('');
  useEffect(() => {
    api.device.getDeviceId().then(setDeviceId);
  }, []);
  const {isViolated, alertMessage, loading} = useBusinessRules(deviceId);
  // [END banner-alert.use-business-rules]

  // [START banner-alert.loading-state]
  // 5. Handle error and loading states
  if (loading) {
    return <Text>Loading...</Text>;
  }
  // [END banner-alert.loading-state]

  // [START banner-alert.render-implementation]
  // 6. Display an alert banner when a business rule is violated
  if (isViolated) {
    return <Banner title={alertMessage} variant="alert" visible />;
  }
  // [END banner-alert.render-implementation]
};

// [START banner-alert.render-extension]
// 1. Render the BannerAlert component at the `pos.cash-session-details.banner.render` target
export default reactExtension('pos.cash-session-details.banner.render', () => (
  <BannerAlert />
));
// [END banner-alert.render-extension]
