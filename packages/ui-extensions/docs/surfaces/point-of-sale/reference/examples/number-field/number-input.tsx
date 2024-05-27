import React, {useState} from 'react';
import {
  NumberField,
  Screen,
  ScrollView,
  Navigator,
  Text,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [number, setNumber] = useState('');
  return (
    <Navigator>
      <Screen name="NumberField" title="NumberField Example">
        <ScrollView>
          <NumberField
            label="Number"
            placeholder="1234"
            helpText="Enter a numeric value."
            value={number}
            onChange={setNumber}
            required={true}
            action={{
              label: 'Clear',
              onPress: () => setNumber(''),
            }}
          />
          <Text>Entered Value: {number}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
