import React, {useEffect} from 'react';
import {extend, render, Text, useContainer} from '@shopify/admin-ui-extensions-react';

function App() {
  const {
    close,
    done,
    setPrimaryAction,
    setSecondaryAction,
  } = useContainer<'Admin::Product::SubscriptionPlan::Add'>();

  useEffect(() => {
    setPrimaryAction({
      content: 'Primary action',
      onAction: async () => {
        console.log('primary action pressed!');
        done();
      },
    });

    setSecondaryAction({
      content: 'Cancel',
      onAction: () => {
        console.log('secondary action pressed!');
        close();
      },
    });
  }, [close, done, setPrimaryAction, setSecondaryAction]);

  return (
    <Text>
      Hi!
    </Text>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
