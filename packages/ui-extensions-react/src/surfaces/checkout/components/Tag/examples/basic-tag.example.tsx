import {render, Tag} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <Tag icon="discount">SPRING</Tag>;
}
