import React, {useState, useCallback} from 'react';
import {Card, RadioButton} from '@shopify/argo';

export function RadioButtonExample() {
  const [radioButtonValue, setRadioButtonValue] = useState('option1');
  const handleRadioButtonChange = useCallback(newValue => setRadioButtonValue(newValue), []);

  return (
    <Card sectioned title="RadioButton component">
      <RadioButton
        label="Option 1"
        helpText="Help text for option 1."
        checked={radioButtonValue === 'option1'}
        id="option1"
        name="radioButtons"
        onChange={handleRadioButtonChange}
      />
      <RadioButton
        label="Option 2"
        helpText="Help text for option 1."
        id="option2"
        name="radioButtons"
        checked={radioButtonValue === 'option2'}
        onChange={handleRadioButtonChange}
      />
    </Card>
  );
}
