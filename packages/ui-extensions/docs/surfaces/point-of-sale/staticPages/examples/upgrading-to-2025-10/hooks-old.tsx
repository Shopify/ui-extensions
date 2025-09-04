import React from 'react';
import {
  Text,
  useConnectivitySubscription,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const ConnectivityStatus = () => {
  const connectivity = useConnectivitySubscription();
  const isConnected = connectivity.internetConnected === 'Connected';

  return (
    <Text color={isConnected ? 'TextSuccess' : 'TextWarning'}>
      Status: {isConnected ? 'Online' : 'Offline'}
    </Text>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <ConnectivityStatus />
));
