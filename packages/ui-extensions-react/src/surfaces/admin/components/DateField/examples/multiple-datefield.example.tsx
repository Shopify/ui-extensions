import React from 'react';
import {
  render,
  DateField,
  type Selected,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  const [selected, setSelected] = React.useState<Selected>(['2023-11-08']);
  
  return (
    <DateField selected={selected} onChange={setSelected} />
  );
}
