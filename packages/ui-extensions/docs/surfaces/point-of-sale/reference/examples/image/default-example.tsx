import React from 'react';

import {
  Image,
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
          <Image src="example.png" />
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <SmartGridModal />,
);
