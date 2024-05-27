import React, {useState} from 'react';
import {
  TextField,
  Screen,
  ScrollView,
  Navigator,
  reactExtension,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [name, setName] = useState('');
  return (
    <Navigator>
      <Screen name="TextField" title="Text Field Example">
        <ScrollView>
          <TextField
            label="Name"
            placeholder="Input your name here"
            required={true}
            value={name}
            onChange={setName}
          />
          <Text>{name ? `Hello ${name}!` : ''}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
