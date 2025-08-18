import React from 'react';

import {
  Banner,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const BannerComponent = () => {
  const api = useApi<'pos.cash-tracking-session-float.block.render-before'>();

  return <Banner title="This is a banner extension" variant="alert" visible />;
};

export default reactExtension(
  'pos.cash-tracking-session-float.block.render-before',
  () => <BannerComponent />,
);
