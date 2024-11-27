import {
  reactExtension,
  Checkbox,
} from '@shopify/ui-extensions-react/admin';

reactExtension('Playground', () => <App />);

function App() {
  return (
    <Checkbox id="checkbox" name="checkbox">
      Save this information for next time
    </Checkbox>
  );
}
