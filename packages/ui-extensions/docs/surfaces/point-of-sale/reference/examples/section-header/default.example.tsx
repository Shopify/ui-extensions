import React from 'react'
import { Navigator, Screen, ScrollView, Stack, reactExtension, useApi, SectionHeader } from '@shopify/ui-extensions-react/point-of-sale'

const ModalComponent = () => {
  const api = useApi<'pos.home.modal.render'>();

  return (
    <Navigator>
      <Screen title="SectionHeader" name="SectionHeader">
        <ScrollView>
          <Stack direction="vertical" paddingHorizontal="HalfPoint">
            <SectionHeader title='Default' />
            <SectionHeader title='With action' action={{label: 'Action', onPress: () => { }}} />
            <SectionHeader title='Without divider' hideDivider />
          </Stack>
        </ScrollView>
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => {
  return <ModalComponent />
}) 
