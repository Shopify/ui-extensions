import {render, TextContainer, TextBlock} from '@shopify/argo-post-purchase-react';

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
