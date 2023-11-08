import {render, Tooltip, Text} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Tooltip>
        <Text>
            You can find your CVV on the reverse of your card.
        </Text>
    </Tooltip>
  );
}
