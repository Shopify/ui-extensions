import React from 'react'

import { Screen, Text, Navigator, reactExtension, Button, useApi } from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.home.modal.render'>();

  return (
    <Navigator>
      <Screen name="Home" title="Home">
        <Text>Home screen</Text>
        <Button title="Navigate to details" onPress={() => api.navigation.navigate('Details')} />
      </Screen>
      <Screen name="Details" title="Details" presentation={{sheet: true}}>
        <Text>Details screen</Text>
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => <Modal />);
