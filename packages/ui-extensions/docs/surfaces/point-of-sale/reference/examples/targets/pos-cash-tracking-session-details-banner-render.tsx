import React from 'react';

import {
  Banner,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const BannerComponent = () => {
  const api = useApi<'pos.cash-tracking-session-details.banner.render'>();

  return <Banner title="This is a banner extension" variant="alert" visible />;
};

export default reactExtension(
  'pos.cash-tracking-session-details.banner.render',
  () => <BannerComponent />,
);
