import {render, SkeletonImage} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <SkeletonImage inlineSize={300} blockSize={300} />;
}
