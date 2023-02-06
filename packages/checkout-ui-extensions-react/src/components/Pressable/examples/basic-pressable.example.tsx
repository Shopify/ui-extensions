import {
  render,
  Icon,
  InlineLayout,
  Pressable,
  Text,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Pressable border="base" cornerRadius="base" padding="base">
      <InlineLayout columns={['fill', 'auto']}>
        <Text>Details</Text>
        <Icon source="chevronDown" size="small" />
      </InlineLayout>
    </Pressable>
  );
}
