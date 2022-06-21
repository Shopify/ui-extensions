import {
  render,
  HeadingGroup,
  Heading,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <>
      <Heading>Heading &lt;h1&rt;</Heading>

      <HeadingGroup>
        <Heading>Heading &lt;h2&rt;</Heading>

        <HeadingGroup>
          <Heading>Heading &lt;h3&rt;</Heading>
        </HeadingGroup>
      </HeadingGroup>
    </>
  );
}
