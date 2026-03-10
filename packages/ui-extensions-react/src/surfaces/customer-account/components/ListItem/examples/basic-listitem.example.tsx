import {
  reactExtension,
  List,
  ListItem,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <List>
      <ListItem>100% organic cotton</ListItem>
    </List>
  );
}
