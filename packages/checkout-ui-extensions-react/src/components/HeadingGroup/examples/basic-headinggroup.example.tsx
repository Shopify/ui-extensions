import {
  render,
  HeadingGroup,
  Heading,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <>
      <Heading>Heading &lt;h1&gt;</Heading>

      <HeadingGroup>
        <Heading>Heading &lt;h2&gt;</Heading>

        <HeadingGroup>
          <Heading>Heading &lt;h3&gt;</Heading>
        </HeadingGroup>
      </HeadingGroup>
    </>
  );
}
