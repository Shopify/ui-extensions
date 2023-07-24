import {render, Thumbnail} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

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
