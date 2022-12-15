import {render, SkeletonImage} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <SkeletonImage inlineSize={300} blockSize={300} />;
}
