import {render, SkeletonTextBlock} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <SkeletonTextBlock />;
}
