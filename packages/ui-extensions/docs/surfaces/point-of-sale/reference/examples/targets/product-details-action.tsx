import React from 'react';

import {
  Text,
  Screen,
  ScrollView,
  Navigator,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.product-details.action.render'>();
  return (
    <Navigator>
      <Screen name="ProductDetails" title="Product Details">
        <ScrollView>
          <Text>{`Product ID: ${api.product.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.product-details.action.render', () => (
  <Modal />
));
