import React, {useState, useCallback} from 'react';
import {Card, Radio, Text, Link} from '@shopify/argo-admin-react';

export function RadioExample() {
  const [radioValue, setRadioValue] = useState('option-1');
  const handleRadioChange = useCallback((newValue) => setRadioValue(newValue), []);

  return (
    <Card sectioned title="Radio component">
      <Radio
        helpText="Help text for option 1."
        checked={radioValue === 'option-1'}
        name="radios"
        value="option-1"
        onChange={handleRadioChange}
      >
        Option 1
      </Radio>
      <Radio
        helpText="Help text for option 2."
        name="radios"
        checked={radioValue === 'option-2'}
        value="option-2"
        onChange={handleRadioChange}
      >
        Option 2
      </Radio>
    </Card>
  );
}
