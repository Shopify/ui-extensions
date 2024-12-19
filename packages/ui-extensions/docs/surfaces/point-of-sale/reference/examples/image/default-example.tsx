import React from 'react';

import {
  Image,
  Screen,
  ScrollView,
  Navigator,
  Box,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  return (
    <Navigator>
      <Screen name="Image" title="Image Example">
        <ScrollView>
          <Image src="example.png" size="s" />
          <Box blockSize="600px" inlineSize="600px" padding="400">
            <Image src="example.png" size="cover" />
          </Box>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
