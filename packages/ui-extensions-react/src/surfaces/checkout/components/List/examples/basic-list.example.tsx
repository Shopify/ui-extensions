import {
  reactExtension,
  List,
  ListItem,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
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
