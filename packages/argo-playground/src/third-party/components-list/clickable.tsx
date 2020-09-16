import React, {useState, useCallback} from 'react';
import {Card, Text, Clickable, Stack, Icon} from '@shopify/argo-admin-react';

export function ClickableExample() {
  const [clickableValue, setClickableValue] = useState('');
  const clickHandlerYellow = useCallback(() => setClickableValue('Yellow Star clicked'), [
    setClickableValue,
  ]);
  const clickHandlerCard = useCallback(() => setClickableValue('Card clicked'), [
    setClickableValue,
  ]);
  const clickHandlerBlue = useCallback(() => setClickableValue('Blue Star clicked'), [
    setClickableValue,
  ]);

  return (
    <Card sectioned title={`Clickable component ${clickableValue ? `(${clickableValue})` : ''}`}>
      <Clickable onPress={clickHandlerCard}>
        <Stack>
          <Clickable onPress={clickHandlerYellow}>
            <Icon source="starFilled" color="yellow" />
          </Clickable>
          <Clickable onPress={clickHandlerBlue}>
            <Icon source="starFilled" color="blue" />
          </Clickable>
          <Text>Click Yellow, Blue star, and me</Text>
        </Stack>
      </Clickable>
    </Card>
  );
}
