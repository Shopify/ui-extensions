import {render, List, ListItem} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <List>
      <ListItem>ListItem</ListItem>
      <ListItem>ListItem</ListItem>
      <ListItem>ListItem</ListItem>
    </List>
  );
}
