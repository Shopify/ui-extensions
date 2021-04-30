import {extend, render, useToast, Button} from '@shopify/argo-admin-react';

function App() {
  const {show: showToast} = useToast();

  return (
    <>
      <Button onPress={() => showToast('Toast popped!')} label="Pop toast" />
      <Button onPress={() => showToast('That didn’t work.', {error: true})} label="Do something" />
    </>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);