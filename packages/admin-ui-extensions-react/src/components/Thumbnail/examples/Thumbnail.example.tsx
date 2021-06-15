import React from 'react';
import {extend, render, Thumbnail} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Thumbnail
      size="small"
      scaleType="fit"
      source="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png"
      alt="Shopify"
    />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
