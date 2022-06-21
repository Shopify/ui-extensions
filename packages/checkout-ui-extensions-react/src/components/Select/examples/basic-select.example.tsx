import {render, Select} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

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
