import {render, SkeletonImage} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <SkeletonImage inlineSize={300} blockSize={300} />;
}
