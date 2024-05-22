import React, { useState } from 'react';

import { Screen, reactExtension, Text, Stepper, ScrollView } from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [value, setValue] = useState(4);

  return (
    <Screen name='stepper' title='Stepper'>
      <ScrollView>
        <Stepper initialValue={value} onValueChanged={setValue} />
        <Text>{value}</Text>
      </ScrollView>
    </Screen>
  );
}

export default reactExtension('pos.home.modal.render', () => {
  return <SmartGridModal />
})
