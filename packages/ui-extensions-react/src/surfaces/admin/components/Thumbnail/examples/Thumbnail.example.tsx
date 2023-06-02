import React from 'react';
import {reactExtension, Thumbnail} from '@shopify/ui-extensions-react/admin';

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

export default reactExtension('Playground', () => <App />);
