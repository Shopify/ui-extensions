import React from 'react';

import {
  Button,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ReturnActionMenuItem = () => {
  const api = useApi<'pos.return.post.action.menu-item.render'>();
  return (
    <Button
      onPress={() => {
        api.action.presentModal();
      }}
    />
  );
};

export default reactExtension('pos.return.post.action.menu-item.render', () => (
  <ReturnActionMenuItem />
));
