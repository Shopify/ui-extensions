import React from 'react';

import {
  Banner,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const BannerComponent = () => {
  const api = useApi<'pos.purchase.post.block.render-before'>();

  return <Banner title="This is a banner extension" variant="alert" visible />;
};

export default reactExtension('pos.purchase.post.block.render-before', () => (
  <BannerComponent />
));
