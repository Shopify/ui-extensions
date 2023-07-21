import {
  reactExtension,
  SkeletonImage,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return (
    <SkeletonImage
      inlineSize={300}
      blockSize={300}
    />
  );
}
