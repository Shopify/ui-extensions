{% raw %}
import React from 'react';
import {render, useExtensionApi, Tile} from '@shopify/retail-ui-extensions-react';

const App = () => {
  // Pass in the extension-point in order to get the correct object type and auto complete from the returned object.
  const api = useExtensionApi<'pos.home.tile.render'>();

  return(
    <>
      <Tile
        title="My app"
        subtitle="Welcome to my react app"
        enabled
        onPress={async () => {
          try {
            await api.cart.applyCartDiscount('FixedAmount', 'Black Friday Discount', '10.00');
          } catch {
            // Couldn't apply the discount.
          }
        }}
      />
    </>;
  );