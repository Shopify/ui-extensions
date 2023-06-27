import React from 'react';
import {
  render,
  Image,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Image
      alt='Shopify logo'
      src='https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png'
    />
  );
}
