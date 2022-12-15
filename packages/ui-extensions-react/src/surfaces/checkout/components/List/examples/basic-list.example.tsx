import {render, List, ListItem} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <List>
      <ListItem>100% organic cotton</ListItem>
      <ListItem>Made in Canada</ListItem>
      <ListItem>Machine washable</ListItem>
    </List>
  );
}
