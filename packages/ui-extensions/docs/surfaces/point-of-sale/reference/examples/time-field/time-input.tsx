import React, {useState} from 'react';
import {
  TimeField,
  Screen,
  ScrollView,
  Navigator,
  Text,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [time, setTime] = useState('');
  return (
    <Navigator>
      <Screen name="TimeField" title="TimeField Example">
        <ScrollView>
          <TimeField label="Time" value={time} onChange={setTime} />
          <Text>Selected Time: {time}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
