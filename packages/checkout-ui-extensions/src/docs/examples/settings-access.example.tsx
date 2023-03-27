import React from 'react';
import {
  render,
  Banner,
  useSettings,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const {banner_title} = useSettings();
  return <Banner title={banner_title} />;
}
