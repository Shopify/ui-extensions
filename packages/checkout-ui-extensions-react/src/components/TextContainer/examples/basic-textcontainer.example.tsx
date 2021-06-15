import {render, TextContainer, TextBlock} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <TextContainer>
      <TextBlock>TextBlock</TextBlock>
      <TextBlock>TextBlock</TextBlock>
      <TextBlock>TextBlock</TextBlock>
    </TextContainer>
  );
}
