import React, {ReactNode} from 'react';
import {
  Text,
  Navigator,
  Screen,
  ScrollView,
  Stack,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const ModalComponent = () => {
  const textElement = (
    count: number,
  ): ReactNode => {
    return (
      <Stack
        direction="vertical"
        paddingHorizontal="Small"
        paddingVertical="Small"
      >
        <Text>{`Text element ${count}`}</Text>
      </Stack>
    );
  };

  return (
    <Navigator>
      <Screen
        title="ScrollView"
        name="ScrollView"
      >
        <ScrollView>
          {Array.from(Array(25)).map((_, count) =>
            textElement(count),
          )}
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => {
    return <ModalComponent />;
  },
);
