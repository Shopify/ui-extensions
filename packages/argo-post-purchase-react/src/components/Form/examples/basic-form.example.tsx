import {render, Form, Button} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    // eslint-disable-next-line no-console
    <Form onSubmit={() => console.log('Submitted!')}>
      <Button submit>Submit</Button>
    </Form>
  );
}
