import {render, SkeletonTextBlock} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <SkeletonTextBlock />;
}