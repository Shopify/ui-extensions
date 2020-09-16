import React, {useState, useCallback} from 'react';
import {Card, Radio} from '@shopify/argo-admin-react';

export function RadioExample() {
  const [radioValue, setRadioValue] = useState('option-1');
  const handleRadioChange = useCallback((newValue) => setRadioValue(newValue), []);

  return (
    <Card sectioned title="Radio component">
      <Radio
        label="Option 1"
        helpText="Help text for option 1."
        checked={radioValue === 'option-1'}
        name="radios"
        value="option-1"
        onChange={handleRadioChange}
      />
      <Radio
        label="Option 2"
        helpText="Help text for option 2."
        name="radios"
        checked={radioValue === 'option-2'}
        value="option-2"
        onChange={handleRadioChange}
      />
    </Card>
  );
}
