import {
  reactExtension,
  SkeletonText,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <SkeletonText />;
}
