import React from 'react';

import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ReturnAction = () => {
  const api = useApi<'pos.return.post.action.render'>();
  return (
    <Navigator>
      <Screen name="ReturnDetails" title="Return Details">
        <ScrollView>
          <Text>{`Order ID: ${api.order.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.return.post.action.render', () => (
  <ReturnAction />
));
