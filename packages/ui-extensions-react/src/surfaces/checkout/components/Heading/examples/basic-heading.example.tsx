import {render, Heading} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <Heading>Store name</Heading>;
}
