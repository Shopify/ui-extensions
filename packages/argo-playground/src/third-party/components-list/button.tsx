import React, {useState, useCallback} from 'react';
import {Card, Stack, Button, IconProps} from '@shopify/argo';

const SORT_ICON: IconProps = {
  source: 'sortMinor',
};

export function ButtonExample() {
  const [buttonValue, setButtonValue] = useState(0);
  const onButtonClick = useCallback(() => {
    setButtonValue(value => value + 1);
  }, []);

  return (
    <Card sectioned title="Button component">
      <Stack>
        <Button title="Sort" icon={SORT_ICON} />
        <Button title="Delete" />
        <Button title={`Publish review ${buttonValue || ''}`} primary onClick={onButtonClick} />
        <Button title="Sort" icon={SORT_ICON} disabled />
        <Button title="Delete" disabled />
        <Button
          title={`Publish review ${buttonValue || ''}`}
          primary
          onClick={onButtonClick}
          disabled
          icon={SORT_ICON}
        />
      </Stack>
    </Card>
  );
}
