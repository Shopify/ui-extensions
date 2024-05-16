import React, {useState} from 'react';

import {
  Screen,
  Text,
  Navigator,
  reactExtension,
  Button,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  return (
    <Navigator>
      <HomeScreen />
      <DetailsScreen />
    </Navigator>
  );
};

const HomeScreen = () => {
  const api = useApi<'pos.home.modal.render'>();
  return (
    <Screen name="Home" title="Home">
      <Text>Home screen</Text>
      <Button
        title="Navigate to details"
        onPress={() => api.navigation.navigate('Details', {orderId: '123'})}
      />
    </Screen>
  );
};

const DetailsScreen = () => {
  const [params, setParams] = useState<pos.home.modal.render>();

  return (
    <Screen
      name="Details"
      title="Details"
      presentation={{sheet: true}}
      onReceiveParams={setParams}
    >
      <Text>{`Order ID: ${params.orderId}`}</Text>
    </Screen>
  );
};

export default reactExtension('pos.home.modal.render', () => <Modal />);
