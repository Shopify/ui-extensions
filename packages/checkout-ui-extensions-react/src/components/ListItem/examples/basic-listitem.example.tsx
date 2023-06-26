import {render, List, ListItem} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <List>
      <ListItem>100% organic cotton</ListItem>
    </List>
  );
}
