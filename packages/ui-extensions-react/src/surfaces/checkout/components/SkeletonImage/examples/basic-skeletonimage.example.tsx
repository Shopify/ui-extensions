import {
  reactExtension,
  SkeletonImage,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <SkeletonImage inlineSize={300} blockSize={300} />;
}
