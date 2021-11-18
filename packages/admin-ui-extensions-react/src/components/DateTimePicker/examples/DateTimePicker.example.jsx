import React from 'react';
import {
  extend,
  render,
  DateTimePicker,
} from '@shopify/admin-ui-extensions-react';

function App() {
  return <DateTimePicker type="date" />;
}

extend(
  'Playground',
  render(() => <App />),
);
