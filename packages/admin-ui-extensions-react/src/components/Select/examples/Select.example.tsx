import React from 'react';
import {extend, render, Select} from '@shopify/admin-ui-extensions-react';

const options = [
  {
    label: 'Cool option',
    value: 'cool-option',
  },
  {
    label: 'Cooler option',
    value: 'cooler-option',
  },
  {
    label: 'Coolest option',
    value: 'coolest-option',
  },
];

function App() {
  return (
    <Select
      label="Select an option"
      options={options}
      labelInline
      onChange={(value) => console.log(value, 'was selected')}
      value="cooler-option"
    />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
