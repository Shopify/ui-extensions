import {
  reactExtension,
  HeadingGroup,
  Heading,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return (
    <>
      <Heading>Heading &lt;h1&gt;</Heading>

      <HeadingGroup>
        <Heading>Heading &lt;h2&gt;</Heading>

        <HeadingGroup>
          <Heading>Heading &lt;h3&gt;</Heading>
        </HeadingGroup>
      </HeadingGroup>
    </>
  );
}
