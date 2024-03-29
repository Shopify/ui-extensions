import {
  reactExtension,
  Checkbox,
  Link,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <CheckBoxLinks />,
);

export const CheckBoxLinks = () => {
  return (
    <Checkbox
      id="checkbox1"
      name="checkboxchoices"
    >
      I agree to the{' '}
      <Link to="https://www.shopify.com">
        terms and conditions
      </Link>{' '}
      and{' '}
      <Link to="https://www.shopify.com">
        privacy policy
      </Link>{' '}
      of the store related to pricing, payment,
      shipping, returns, and liability set forth
      by Ride Sports
    </Checkbox>
  );
};
