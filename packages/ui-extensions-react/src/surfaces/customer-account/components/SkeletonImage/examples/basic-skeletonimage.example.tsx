import {
  reactExtension,
  SkeletonImage,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
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
