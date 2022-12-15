import {
  render,
  Icon,
  InlineLayout,
  Pressable,
  Text,
} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Pressable border="base" borderRadius="base" padding="base">
      <InlineLayout columns={['fill', 'auto']}>
        <Text>Details</Text>
        <Icon source="chevronDown" size="small" />
      </InlineLayout>
    </Pressable>
  );
}
