import React, {useState} from 'react';
import {
  DateField,
  Screen,
  ScrollView,
  Navigator,
  Text,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [date, setDate] = useState('');
  return (
    <Navigator>
      <Screen name="DateField" title="DateField Example">
        <ScrollView>
          <DateField
            label="Date"
            value={date}
            onChange={setDate}
            action={{
              label: 'Clear',
              onPress: () => setDate(''),
            }}
          />
          <Text>Selected Date: {date}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
