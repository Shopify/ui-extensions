import React from 'react';

import {
  Text,
  Screen,
  ScrollView,
  Navigator,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.purchase.post.action.render'>();
  return (
    <Navigator>
      <Screen name="HelloWorld" title="Hello World!">
        <ScrollView>
          <Text>{`Order ID for complete checkout: ${api.order.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.purchase.post.action.render', () => (
  <Modal />
));
