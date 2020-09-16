import React, {useState, useCallback} from 'react';
import {Card, RadioButton} from '@shopify/argo-admin-react';

export function RadioButtonExample() {
  const [radioButtonValue, setRadioButtonValue] = useState('option-1');
  const handleRadioButtonChange = useCallback((newValue) => setRadioButtonValue(newValue), []);

  return (
    <Card sectioned title="RadioButton component">
      <RadioButton
        label="Option 1"
        helpText="Help text for option 1."
        checked={radioButtonValue === 'option-1'}
        id="option1"
        value="option-1"
        name="radioButtons"
        onChange={handleRadioButtonChange}
      />
      <RadioButton
        label="Option 2"
        helpText="Help text for option 2."
        id="option2"
        value="option-2"
        name="radioButtons"
        checked={radioButtonValue === 'option-2'}
        onChange={handleRadioButtonChange}
      />
    </Card>
  );
}
