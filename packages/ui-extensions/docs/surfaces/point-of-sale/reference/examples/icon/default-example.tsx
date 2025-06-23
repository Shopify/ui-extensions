import React from 'react';

import {
  Icon,
  Screen,
  ScrollView,
  Navigator,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  return (
    <Navigator>
      <Screen name="Image" title="Image Example">
        <ScrollView>
          <Icon name="call" size="s" tone="icon-success" />
          <Icon name="card-reader" size="l" />
          <Icon name="circle-cancel" size="xl" tone="icon-critical" />
          <Icon name="orders-filled" size="s" />
          <Icon name="star" size="m" />
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
