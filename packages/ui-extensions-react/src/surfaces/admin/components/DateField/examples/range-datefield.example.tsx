import React from 'react';
import {
  render,
  DateField,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  const [selected, setSelected] = React.useState({
    start: '2023-11-08',
    end: '2023-11-10',
  });

  return (
    <DateField
      label="DateField"
      value={selected}
      onChange={setSelected}
    />
  );
}
