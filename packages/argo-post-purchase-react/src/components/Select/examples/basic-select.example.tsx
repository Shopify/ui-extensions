import {render, Select} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <Select
      label="Select"
      value="1"
      options={[
        {
          value: '1',
          label: 'Option 1',
        },
        {
          value: '2',
          label: 'Option 2',
        },
        {
          value: '3',
          label: 'Option 3',
        },
      ]}
    />
  );
}
