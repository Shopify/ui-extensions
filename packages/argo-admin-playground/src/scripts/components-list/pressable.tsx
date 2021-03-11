import React, {useState, useCallback} from 'react';
import {Card, Text, Pressable, Stack, Icon} from '@shopify/argo-admin-react';

export function PressableExample() {
  const [pressableValue, setPressableValue] = useState('');
  const pressHandlerYellow = useCallback(() => setPressableValue('Yellow Star pressed'), [
    setPressableValue,
  ]);
  const pressHandlerCard = useCallback(() => setPressableValue('Card pressed'), [
    setPressableValue,
  ]);
  const pressHandlerBlue = useCallback(() => setPressableValue('Blue Star pressed'), [
    setPressableValue,
  ]);

  return (
    <Card sectioned title={`Pressable component ${pressableValue ? `(${pressableValue})` : ''}`}>
      <Pressable onPress={pressHandlerCard}>
        <Stack>
          <Pressable onPress={pressHandlerYellow}>
            <Icon source="starFilled" color="yellow" />
          </Pressable>
          <Pressable onPress={pressHandlerBlue}>
            <Icon source="starFilled" color="blue" />
          </Pressable>
          <Text>Press Yellow, Blue star, and me</Text>
        </Stack>
      </Pressable>
    </Card>
  );
}
