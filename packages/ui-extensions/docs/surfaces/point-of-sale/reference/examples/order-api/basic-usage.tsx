import React from 'react';
import {
  reactExtension,
  Screen,
  Navigator,
  ScrollView,
  Text,
  Section,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const PostPurchaseAction = () => {
  const api = useApi<'pos.purchase.post.action.render'>();
  const order = api.order;

  return (
    <Navigator>
      <Screen name="PostPurchaseAction" title="Post Purchase Action">
        <ScrollView>
          <Section title="Order Information">
            <Text>Order ID: {order.id}</Text>
            <Text>Order Name: {order.name}</Text>
            {order.customerId && <Text>Customer ID: {order.customerId}</Text>}
          </Section>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.purchase.post.action.render', () => (
  <PostPurchaseAction />
));
