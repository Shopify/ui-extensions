import React, {useState, useCallback} from 'react';
import {Card, Text, Pressable, Stack, Icon} from '@shopify/argo-admin-react';

export function PressableExample() {
  const [pressableValue, setPressableValue] = useState('');
  const pressHandler = useCallback(() => setPressableValue('Star pressed'), [
    setPressableValue,
  ]);
  const pressHandlerCard = useCallback(
    () => setPressableValue('Card pressed'),
    [setPressableValue],
  );
  return (
    <Card
      sectioned
      title={`Pressable component ${
        pressableValue ? `(${pressableValue})` : ''
      }`}
    >
      <Pressable onPress={pressHandlerCard}>
        <Stack>
          <Pressable onPress={pressHandler}>
            <Icon source="starFilled" />
          </Pressable>
          <Text>Press star and card</Text>
        </Stack>
      </Pressable>
    </Card>
  );
}
