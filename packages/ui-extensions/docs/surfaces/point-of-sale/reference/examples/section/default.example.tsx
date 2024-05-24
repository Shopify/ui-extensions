import React from 'react'
import { Text, Navigator, Screen, ScrollView, Stack, reactExtension, Section, useApi, Selectable } from '@shopify/ui-extensions-react/point-of-sale'

const ModalComponent = () => {
  const api = useApi<'pos.home.modal.render'>();

  return (
    <Navigator>
      <Screen title="Section" name="Section">
        <ScrollView>
          <Stack direction="vertical" paddingHorizontal="HalfPoint">
            <Section title='Items' action={{title: "Show toast", onPress: () => api.toast.show('Hello world!')}}>
              <Selectable onPress={() => api.toast.show('Item 1!')}>
                <Stack direction="vertical" paddingHorizontal="Small" paddingVertical="Small">
                  <Text>Item 1</Text>
                </Stack>  
              </Selectable>
              <Selectable onPress={() => api.toast.show('Item 2!')}>
                <Stack direction="vertical" paddingHorizontal="Small" paddingVertical="Small">
                  <Text>Item 2</Text>
                </Stack>  
              </Selectable>
              <Selectable onPress={() => api.toast.show('Item 3!')}>
                <Stack direction="vertical" paddingHorizontal="Small" paddingVertical="Small">
                  <Text>Item 3</Text>
                </Stack>  
              </Selectable>
              <Selectable onPress={() => api.toast.show('Item 4!')}>
                <Stack direction="vertical" paddingHorizontal="Small" paddingVertical="Small">
                  <Text>Item 4</Text>
                </Stack>  
              </Selectable>
            </Section>
          </Stack>
        </ScrollView>
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => {
  return <ModalComponent />
}) 