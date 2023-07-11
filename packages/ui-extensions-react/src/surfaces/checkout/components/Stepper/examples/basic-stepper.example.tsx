import {reactExtension, Stepper} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <Stepper label="Quantity" value={1} />;
}
