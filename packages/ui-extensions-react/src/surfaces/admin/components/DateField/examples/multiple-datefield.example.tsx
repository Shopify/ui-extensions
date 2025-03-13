import React from 'react';
import {
  render,
  DateField,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  const [value, setValue] = React.useState([
    '2023-11-08',
  ]);

  return (
    <DateField
      label="DateField"
      value={value}
      onChange={setValue}
    />
  );
}
