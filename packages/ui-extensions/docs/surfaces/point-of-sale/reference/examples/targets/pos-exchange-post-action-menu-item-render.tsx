import React from 'react';

import {
  Button,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ExchangeActionMenuItem = () => {
  const api = useApi<'pos.exchange.post.action.menu-item.render'>();
  return (
    <Button
      onPress={() => {
        api.action.presentModal();
      }}
    />
  );
};

export default reactExtension(
  'pos.exchange.post.action.menu-item.render',
  () => <ExchangeActionMenuItem />,
);
