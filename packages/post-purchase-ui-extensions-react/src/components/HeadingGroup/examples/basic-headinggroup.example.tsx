import {
  render,
  HeadingGroup,
  Heading,
  View,
} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

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
