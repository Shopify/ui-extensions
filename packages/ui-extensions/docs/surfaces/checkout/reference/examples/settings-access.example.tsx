import React from 'react';
import {
  reactExtension,
  Banner,
  useSettings,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const {banner_title} = useSettings();
  return <Banner title={banner_title} />;
}