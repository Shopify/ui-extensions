import React, {useState} from 'react';
import {
  EmailField,
  Screen,
  ScrollView,
  Navigator,
  Text,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [email, setEmail] = useState('');
  return (
    <Navigator>
      <Screen name="DateField" title="DateField Example">
        <ScrollView>
          <EmailField
            label="Email"
            placeholder="example@email.com"
            helpText="Please enter a valid email"
            value={email}
            onChange={setEmail}
            required={true}
            action={{
              label: 'Clear',
              onPress: () => setEmail(''),
            }}
          />
          <Text>Entered Email: {email}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
