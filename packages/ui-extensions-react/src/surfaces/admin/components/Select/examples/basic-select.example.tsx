import React from 'react';
import {
  render,
  Select,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Select
      label="Country"
      value="2"
      options={[
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
      ]}
    />
  );
}
