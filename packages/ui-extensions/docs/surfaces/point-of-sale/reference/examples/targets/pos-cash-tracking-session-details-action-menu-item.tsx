import React from 'react';

import {
  Button,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ButtonComponent = () => {
  const api =
    useApi<'pos.cash-tracking-session-details.action.menu-item.render'>();

  return <Button onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.cash-tracking-session-details.action.menu-item.render',
  () => <ButtonComponent />,
);
