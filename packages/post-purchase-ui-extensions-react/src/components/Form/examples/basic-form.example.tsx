import {render, Form, Button} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    // eslint-disable-next-line no-console
    <Form onSubmit={() => console.log('Submitted!')}>
      <Button submit>Submit</Button>
    </Form>
  );
}
