import {render, Tooltip} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <>
      <Button interestTarget="tooltip-1">tooltip-1</Button>
      <Tooltip id="tooltip-1">
        <Text>Tooltip Content</Text>
      </Tooltip>
    </>
  );
}
