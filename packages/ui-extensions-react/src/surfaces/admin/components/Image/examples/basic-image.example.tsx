import {render, Image} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Image source="https://shopify.dev/assets/icons/64/pickaxe-1.png" />
  );
}
