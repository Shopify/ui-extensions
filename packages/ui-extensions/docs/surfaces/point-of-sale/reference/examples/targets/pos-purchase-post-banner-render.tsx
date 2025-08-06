import React from 'react';

import {
  Banner,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const PostPurchaseBanner = () => {
  const api = useApi<'pos.purchase.post.banner.render'>();
  return (
    <Banner
      title={`Order ID for complete checkout: ${api.order.id}`}
      variant="alert"
      visible
    />
  );
};

export default reactExtension('pos.purchase.post.banner.render', () => (
  <PostPurchaseBanner />
));
