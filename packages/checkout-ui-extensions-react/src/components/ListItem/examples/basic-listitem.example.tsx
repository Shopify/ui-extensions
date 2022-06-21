import {render, List, ListItem} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <List>
      <ListItem>100% organic cotton</ListItem>
    </List>
  );
}
