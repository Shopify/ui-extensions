import React from 'react';
import {
  reactExtension,
  RadioButtonList,
  Screen,
  ScrollView,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [selected, setSelected] =
    React.useState('');

  return (
    <Screen
      name="RadioButtonList"
      title="RadioButtonList"
    >
      <ScrollView>
        <RadioButtonList
          items={['1', '2', '3']}
          onItemSelected={setSelected}
          initialSelectedItem={selected}
        />
        <Text>{selected}</Text>
      </ScrollView>
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => {
    return <SmartGridModal />;
  },
);
