import React, {useState, useCallback} from 'react';
import {Card, Stack, Button, IconProps} from '@shopify/argo-admin-react';

const SORT_ICON: IconProps = {
  source: 'sortMinor',
};

export function ButtonExample() {
  const [buttonValue, setButtonValue] = useState(0);
  const onButtonPress = useCallback(() => {
    setButtonValue((value) => value + 1);
  }, []);

  return (
    <Card sectioned title="Button component">
      <Stack>
        <Button title="Sort" icon={SORT_ICON} />
        <Button title="Delete" />
        <Button
          title={`Publish review ${buttonValue || ''}`}
          primary
          onPress={onButtonPress}
        />
        <Button title="Sort" icon={SORT_ICON} disabled />
        <Button title="Delete" disabled />
        <Button
          title={`Publish review ${buttonValue || ''}`}
          primary
          onPress={onButtonPress}
          disabled
          icon={SORT_ICON}
        />
      </Stack>
    </Card>
  );
}
