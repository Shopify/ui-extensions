import React from 'react';
import {
  render,
  BlockStack,
  Button,
  Checkbox,
  Link,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <CheckBoxLinks />
));

export const CheckBoxLinks = () => {
  return (
    <BlockStack
      border="base"
      maxInlineSize={500}
      padding="base"
      cornerRadius="large"
    >
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
      <Button>Pay now</Button>
    </BlockStack>
  );
};
