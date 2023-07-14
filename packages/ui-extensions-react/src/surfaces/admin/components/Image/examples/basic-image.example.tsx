import {render, Image} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Image source="https://shopify.dev/assets/api/ui-extensions/admin/components/image-example-code.png" />
  );
}
