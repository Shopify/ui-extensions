import {
  render,
  HeadingGroup,
  Heading,
  View,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <View>
      <Heading>Hi John Doe! (h1)</Heading>

      <HeadingGroup>
        <Heading>Your account (h2)</Heading>

        <HeadingGroup>
          <Heading>Change Password (h3)</Heading>
        </HeadingGroup>
      </HeadingGroup>
    </View>
  );
}
