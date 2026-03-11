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
      <ListItem>Made in Canada</ListItem>
      <ListItem>Machine washable</ListItem>
    </List>
  );
}
