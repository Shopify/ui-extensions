import React from 'react'
import { Button, Navigator, Screen, reactExtension, useApi } from '@shopify/ui-extensions-react/point-of-sale'

const ModalComponent = () => {
  const api = useApi()
  return (
    <Navigator>
      <Screen title="Home" name="Home">
        <Button title="Press me!" onPress={() => api.toast.show('Button tapped!')} />
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => {
  return <ModalComponent />
})