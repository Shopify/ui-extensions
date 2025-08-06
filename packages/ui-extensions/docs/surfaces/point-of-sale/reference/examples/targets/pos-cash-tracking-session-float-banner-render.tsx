import React from 'react';

import {
  Banner,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const CashFloatBanner = () => {
  return (
    <Banner title="This is a banner extension" variant="information" visible />
  );
};

export default reactExtension(
  'pos.cash-tracking-session-float.banner.render',
  () => <CashFloatBanner />,
);
