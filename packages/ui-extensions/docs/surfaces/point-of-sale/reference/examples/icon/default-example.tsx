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
          <Icon name="call" size="minor" />
          <Icon name="card-reader" size="major" />
          <Icon name="circle-cancel" size="spot" />
          <Icon name="orders" size="caption" />
          <Icon name="star" size="badge" />
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
