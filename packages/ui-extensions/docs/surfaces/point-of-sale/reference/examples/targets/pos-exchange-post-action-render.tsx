import React from 'react';

import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ExchangeAction = () => {
  const api = useApi<'pos.exchange.post.action.render'>();
  return (
    <Navigator>
      <Screen name="ExchangeDetails" title="Exchange Details">
        <ScrollView>
          <Text>{`Order ID: ${api.order.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.exchange.post.action.render', () => (
  <ExchangeAction />
));
