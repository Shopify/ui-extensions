import React from 'react';
import {
  render,
  Option,
  Select,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

const options = [
  {
    value: '1',
    label: 'Australia',
  },
  {
    value: '2',
    label: 'Canada',
  },
  {
    value: '3',
    label: 'France',
  },
  {
    value: '4',
    label: 'Japan',
  },
  {
    value: '5',
    label: 'Nigeria',
  },
  {
    value: '6',
    label: 'United States',
  },
];

function App() {
  const [value, setValue] = React.useState('2');
  return (
    <Select
      label="Country"
      value={value}
      onChange={setValue}
    >
      {options.map((option) => (
        <Option
          value={option.value}
          label={option.label}
        />
      ))}
    </Select>
  );
}
