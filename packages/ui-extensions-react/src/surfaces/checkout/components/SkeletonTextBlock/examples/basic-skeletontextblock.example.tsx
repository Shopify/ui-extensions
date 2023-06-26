import {
  reactExtension,
  SkeletonTextBlock,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <SkeletonTextBlock />;
}
