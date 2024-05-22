import React, { useState } from 'react';

import { Screen, reactExtension, Text, ScrollView, Selectable } from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [count, setCount] = useState(0);

  return (
    <Screen name='selectable' title='Selectable'>
      <ScrollView>
        <Selectable onPress={() => {setCount(count + 1)}}>
          <Text variant="body">{count}</Text>
        </Selectable>
      </ScrollView>
    </Screen>
  );
}

export default reactExtension('pos.home.modal.render', () => {
  return <SmartGridModal />
})
