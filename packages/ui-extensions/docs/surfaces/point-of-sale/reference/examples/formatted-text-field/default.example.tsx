import React, {useState} from 'react';
import {
  Navigator,
  Screen,
  Text,
  ScrollView,
  FormattedTextField,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [textFieldValue, setTextFieldValue] =
    useState('');

  return (
    <Navigator>
      <Screen
        name="TextArea"
        title="Text Area Example"
      >
        <ScrollView>
          <FormattedTextField
            placeholder="Email address"
            inputType="email"
            onChangeText={setTextFieldValue}
          />
          <Text>{textFieldValue}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <SmartGridModal />,
);
