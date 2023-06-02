import React, {useState} from 'react';
import {reactExtension, OptionList} from '@shopify/ui-extensions-react/admin';

function App() {
  const options = [
    {label: 'Red', value: 'red', disabled: false},
    {label: 'Green', value: 'green', disabled: false},
    {label: 'Blue', value: 'blue', disabled: false},
  ];

  const [selected, setSelected] = useState([]);

  return (
    <OptionList
      title="OptionList title"
      options={options}
      selected={selected}
      allowMultiple
      onChange={(newSelected) => {
        setSelected(newSelected);
        console.log(`options selected: ${newSelected}`);
      }}
    />
  );
}

export default reactExtension('Playground', () => <App />);
