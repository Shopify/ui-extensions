import {render, TextContainer, TextBlock} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <TextContainer>
      <TextBlock>TextBlock</TextBlock>
      <TextBlock>TextBlock</TextBlock>
      <TextBlock>TextBlock</TextBlock>
    </TextContainer>
  );
}
