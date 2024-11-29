import {
  reactExtension,
  Button,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Button
      onPress={() => {
        console.log('onPress event');
      }}
    >
      Click here
    </Button>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
