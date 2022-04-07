import {render, SkeletonImage} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <SkeletonImage size={{inline: 300, block: 300}} />;
}
