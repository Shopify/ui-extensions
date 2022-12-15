import {render, SkeletonTextBlock} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <SkeletonTextBlock />;
}
