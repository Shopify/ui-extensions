import React, {useState} from 'react';
import {
  TextArea,
  Screen,
  ScrollView,
  Navigator,
  reactExtension,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [text, setText] = useState('');

  return (
    <Navigator>
      <Screen
        name="TextArea"
        title="Comment Input Example"
      >
        <ScrollView>
          <TextArea
            label="Text"
            rows={4}
            placeholder="Input your text here"
            value={text}
            onChange={setText}
          />
          <Text>{text}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <SmartGridModal />,
);
