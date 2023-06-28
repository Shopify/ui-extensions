import {render, Checkbox} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <Checkbox id="checkbox" name="checkbox">
      Save this information for next time
    </Checkbox>
  );
}
