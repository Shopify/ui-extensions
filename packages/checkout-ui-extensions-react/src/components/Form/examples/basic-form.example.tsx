import {render, Form, Button} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    // eslint-disable-next-line no-console
    <Form onSubmit={() => console.log('Submitted!')}>
      <Button submit>Submit</Button>
    </Form>
  );
}
