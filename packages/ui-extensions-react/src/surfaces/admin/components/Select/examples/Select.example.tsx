import React from 'react';
import {reactExtension, Select} from '@shopify/ui-extensions-react/admin';

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

export default reactExtension('Playground', () => <App />);
