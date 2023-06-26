import {reactExtension, Heading} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <Heading>Store name</Heading>;
}
