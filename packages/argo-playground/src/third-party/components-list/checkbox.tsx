import React, {useState} from 'react';
import {Card, Stack, Checkbox} from '@shopify/argo-admin-react';

export function CheckboxExample() {
  const [noLabelChecked, setNoLabelChecked] = useState(false);
  const [fooChecked, setFooChecked] = useState(false);
  const [barChecked, setBarChecked] = useState(false);

  return (
    <Card sectioned title="Checkbox component">
      <Stack>
        <Checkbox checked={noLabelChecked} onChange={(newValue) => setNoLabelChecked(newValue)} />
        <Checkbox checked={fooChecked} onChange={(newValue) => setFooChecked(newValue)}>
          Foo
        </Checkbox>
        <Checkbox checked={barChecked} onChange={(newValue) => setBarChecked(newValue)}>
          Bar
        </Checkbox>
      </Stack>
    </Card>
  );
}
