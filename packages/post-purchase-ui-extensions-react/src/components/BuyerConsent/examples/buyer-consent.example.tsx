import {render, BuyerConsent} from '@shopify/post-purchase-ui-extensions-react';
import {useState} from 'react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  const [consent, setConsent] = useState(false)

  return (
    <BuyerConsent
      policy="subscriptions"
      checked={consent}
      onChange={setConsent}
    />
  );
}
