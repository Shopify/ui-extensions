import {
  render,
  Icon,
  Pressable,
  Tooltip,
} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Pressable
      overlay={
        <Tooltip>In case we need to contact you about your order</Tooltip>
      }
    >
      <Icon source="questionFill" />
    </Pressable>
  );
}
