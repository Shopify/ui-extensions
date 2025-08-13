import React from 'react';

import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.cash-tracking-session-details.action.render'>();

  return (
    <Navigator>
      <Screen
        name="CashTrackingSessionDetails"
        title="Cash Tracking Session Details"
      >
        <ScrollView>
          <Text>Cash tracking session details action extension</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.cash-tracking-session-details.action.render',
  () => <Modal />,
);
