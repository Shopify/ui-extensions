import React, {useState} from 'react';
import {
  Button,
  TimePicker,
  Screen,
  Text,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [date, setDate] = useState(
    new Date().toDateString(),
  );
  const visibleState = useState(false);

  return (
    <Screen name="Home" title="Home">
      <Text>Selected date: {date}</Text>
      <Button
        title="Show"
        onPress={() => {
          visibleState[1](true);
        }}
      />
      <TimePicker
        visibleState={visibleState}
        onChange={(selected) => {
          setDate(
            new Date(selected).toDateString(),
          );
        }}
        selected={date}
        is24Hour={true}
        inputMode={'spinner'}
      />
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <SmartGridModal />,
);
